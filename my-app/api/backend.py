from datetime import datetime
import json
import eml_parser
import email
from disposable_email_domains import blocklist
import re
import jellyfish
import math
import csv
from spellchecker import SpellChecker
import requests
import time

def json_serial(obj):
    if isinstance(obj, datetime):
        serial = obj.isoformat()
        return serial


def extract_body(filename):
    message = email.message_from_bytes(filename)
    parser = eml_parser.EmlParser()
    raw_body_text = (parser.get_raw_body_text(message))

    f = open("body.json", "w")
    f.write(json.dumps(raw_body_text, default=json_serial, indent=4, sort_keys=True))
    f.close()

    with open("body.json", "r") as read_file:
        bodydata = json.load(read_file)

    return bodydata


def extract_header_info(filename):
    ep = eml_parser.EmlParser()

    parsed_eml = ep.decode_email_bytes(filename)

    f = open("email_dump.json", "w")
    f.write(json.dumps(parsed_eml, default=json_serial, indent=4, sort_keys=True))
    f.close()

    with open("email_dump.json", "r") as read_file:
        data = json.load(read_file)

    date_sent_dt = datetime.strptime((data['header']['header']['date'])[0], '%a, %d %b %Y %H:%M:%S %z')
    date_sent = data['header']['header']['date']

    sender = data['header']['from']

    subject = data['header']['subject']

    attachments = []

    if 'attachment' in data:
        for att in data['attachment']:
            attachments.append([att['filename'], att['extension']])

    cc = []

    if 'cc' in data['header']:
        for c in data['header']['cc']:
            cc.append(c)

    return [sender, cc, subject, date_sent_dt, attachments]


# Email time score calculator
def is_unusual_time(dt):
    hour = dt.hour

    if hour == 0 or hour == 1:
        return 1

    elif hour < 9:
        return abs(hour - 9) / 7

    elif hour > 17:
        return abs(hour - 17) / 7

    else:
        return 0


def misspelled_address(address):
    em = re.split('@', address)
    scores = []

    file = open("common_emails.txt", "r")
    for ln in file:
        scores.append((ln.rstrip(), jellyfish.levenshtein_distance(em[1], ln)))

    scores.sort(key=lambda x: x[1])

    jaro = jellyfish.jaro_winkler_similarity(em[1], scores[0][0])

    if jaro == 1.0:
        return False
    elif jaro >= 0.85:
        return True
    elif 0.70 <= jaro < 0.85 and jellyfish.hamming_distance(em[1], scores[0][0]) < 5:
        if len(em[1]) == len(scores[0][0]) and jellyfish.match_rating_comparison(em[1], scores[0][0]):
            return True
    else:
        return False


def length_check(address, score_total, constant_val):
    em = re.split('@', address)

    head = em[0]
    tail = em[1]

    hlen = len(head)
    tlen = len(tail)

    total = 0

    if hlen >= 22:
        total += score_total

    if 15 <= tlen < 25:
        total += (math.exp(((tlen-15)*10)/constant_val)-1)

    elif tlen >= 25:
        total += score_total

    return total


def sender_check(address):
    total = 0
    dom = re.split('@', address)[1]
    if address in blocklist:
        return 27
    elif misspelled_address(address):
        return 27
    else:
        total += length_check(address, 7, 47.60893633)

        return total


def cc_check(addresses):
    total = 0
    l_total = 0

    if len(addresses) > 10:
        total += 5

    for a in addresses:
        dom = re.split('@', a)[1]

        if dom in blocklist:
            total += 8
            break
        elif misspelled_address(a):
            total += 8
            break

        l_total += length_check(a, 2, 90)

        if l_total >= 2:
            l_total = 2
            break

    return total + l_total


def terms_check(text, score_limit):
    inc = 0

    list_text = re.split('\W+ |_| |\n|\.', text.rstrip().lower())

    while True:
        if '' in list_text:
            list_text.sort()
            list_text.pop(0)
        else:
            break

    file = open("terms.txt", "r")
    for ln in file:
        if ln.rstrip() in text.lower():
            inc += 1

    return (inc/len(list_text)) * score_limit


def spell_check(text, score_limit):
    spell = SpellChecker()

    spell.word_frequency.load_words(['microsoft', 'apple', 'google', 'http', 'https', 'www'])

    list_text = re.split('\W+ |_| |\?|!', text.rstrip().lower())
    while True:
        if '' in list_text:
            list_text.sort()
            list_text.pop(0)
        else:
            break

    check = spell.unknown(list_text)

    l = len(check)

    return (l/len(list_text)) * score_limit


def hidden_body_urls(text):
    urls = re.findall(r'<(.+)>', text)

    if len(urls) == 0:
        return 0

    URL = "https://raw.githubusercontent.com/opendns/public-domain-lists/master/opendns-top-domains.txt"

    page = requests.get(URL)

    r = page.text.split('\n')

    r = r[:1000]
    r.append('python.org')

    total = 0
    utotal = 0

    for u in urls:
        for d in r:
            if d == re.findall('/+(.+)/+',u)[0]:
                utotal += 5

        if 55 <= len(u) < 105:
            total += (math.exp(((len(u) - 55)*2) / 55.25) - 1)

            if total >= 5:
                total = 5
                break

        elif len(u) >= 105:
            total = 5
            break

    total += (12 * (len(urls) / 4))

    utotal = (len(urls) * 5) - (utotal / len(urls))

    return total + utotal


def extension_check(extension):
    with open('extensions.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            if extension == row[0]:
                return int(row[1])


def calculate_score(filename):
    header_info = extract_header_info(filename)
    body = extract_body(filename)[0][1]
    total = 0

    # 1. Sender Score
    sender_score = sender_check(header_info[0])
    # print("Sender Score: " + str(sender_score))

    # 2. CC Score
    cc_score = cc_check(header_info[1])
    # print("CC Score: " + str(cc_score))

    # 3. Subject Score

    ## Spelling
    subject_spelling = spell_check(header_info[2], 5)
    # print("    Subject Spelling Score: " + str(subject_spelling))

    ## Common Terms
    subject_common_terms = terms_check(header_info[2], 5)
    # print("    Subject Common Terms Score: " + str(subject_common_terms))

    subject_score = subject_spelling + subject_common_terms
    # print("Subject Score: " + str(subject_score))

    # 4. Date Score
    date_score = is_unusual_time(header_info[3])
    # print("Date Score: " + str(date_score))

    # 5. Body Score

    ## Spelling
    body_spelling = spell_check(body, 7)
    # print("    Body Spelling Score: " + str(body_spelling))

    ## Common Terms
    body_common_terms = terms_check(body, 10)
    # print("    Body Common Terms Score: " + str(body_common_terms))

    ## Hyperlinks
    body_hyperlinks = hidden_body_urls(body)
    # print("    Body Hyperlinks Score: " + str(body_hyperlinks))

    body_score = body_spelling + body_common_terms + body_hyperlinks
    # print("Body Score: " + str(body_score))

    attachments_score = 0
    if len(header_info[4]) != 0:
        # 6. Attachments

        ## Extension
        exts = 0
        for att in header_info[4]:
            exts += extension_check(att[1])

        # print("    Attachments Extensions Score: " + str(exts))

        ## Spelling
        att_spell = 0
        for att in header_info[4]:
            att_spell += spell_check(re.split('\.', att[0])[0], 1)

        attachments_spelling = att_spell/len(header_info[4])
        # print("    Attachments Spelling Score: " + str(attachments_spelling))

        ## Common Terms
        att_terms = 0
        for att in header_info[4]:
            att_terms += terms_check(att[0], 1)

        attachments_common_terms = att_terms/len(header_info[4])
        # print("Attachments Common Terms Score: " + str(attachments_common_terms))

        attachments_score = exts + attachments_spelling + attachments_common_terms

    total = round(sender_score + cc_score + subject_score + date_score + body_score + attachments_score, 2)
    # print("Total Score: " + str(total))
    # print("Percentage: " + str(total) + "%")

    #values = [round(sender_score, 2), round(cc_score, 2), round(subject_score, 2), round(date_score, 2), round(body_score, 2), round(attachments_score, 2)]
    values = [int(sender_score), int(cc_score), int(subject_score), int(date_score), int(body_score), int(attachments_score)]
    # print(values)

    values.append(int(total))

    return values