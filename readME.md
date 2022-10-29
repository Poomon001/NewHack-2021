# Phishing Email Evaluator

A web application that analyzes a .eml file (email) and assigns a percentage score along with a breakdown of the score corresponding to the risk of the email being used for phishing or other nefarious purposes.

- Website (try our app!): (https://phishingevaluator.herokuapp.com)
- Source code: (https://github.com/Poomon001/NewHack-2021)

## Project Background

### What is Phishing?

As defined by [phishing.org](https://github.com/Poomon001/NewHack-2021), "Phishing is a cybercrime in which a target or targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords."

### Our Motivation

Our motivation for this project was to help people recognize the common signs of a phishing email to potentially minimize damages such as identity theft and financial loss. In doing so, we developed an automated tool that safely parses an email and reports its risk of being a phishing email.

This infographic from KnowBe4 outlines major red flags to look for when reading an email, and we utilized many of these in our project.

![alt text](https://www.knowbe4.com/hs-fs/hub/241394/file-26212286-jpg?hsLang=en "Email Red Flags")
Link: (https://www.knowbe4.com/hs-fs/hub/241394/file-26212286-jpg?hsLang=en)

### Timeline and Contributors

This project was initially created by Poomrapee Chuthamsatid, Jeet Ajmani, and Harsh Patel for University of Toronto's NewHacks Hackathon competition. However, Poom and Jeet decided to continue improving on the project after the competition with the goal of deploying it as a web application.

## Using the App

### Instructions

To use the app, visit https://phishingevaluator.herokuapp.com and either click the main button to browse for a .eml file or simply drag and drop your specified .eml file into the box.

Upon doing so, the evaluator will begin analyzing your file and once complete, a button with the text "Open The Result" will appear.

By clicking the button, you will be able to see two charts outlining the email's risk, as well as a large percentage above. You can also choose to change the style of either chart.

### .eml files

To extract the most accurate information from an email, we decided to use .eml files provided by the user. These types of files can be downloaded from almost all email service providers.

To download a .eml file from gmail, first open the email and click the three vertical dots at the top right of the message to open the options menu.

![alt text](https://phishingevaluator.herokuapp.com/step1.jpg "Opening the options menu")

Next, click the button that says "Download message" to download the .eml file to your computer.

![alt text](https://phishingevaluator.herokuapp.com/step2.jpg "Downloading the message")

That is it. Now you can use your newly downloaded .eml file and test it with the app.

### How to interpret the results

The phishing risk is determined using six categories extracted from the email.

1. **Sender** _(Weight: 27%)_
   - (27 points) If the sender's email address domain belongs to the blocklist _or_  
     the domain is a misspelling of the top 100 domains, assign a score of 27. Otherwise check the condition below.
   - If the above condition is not met:
     - ([0,7] points) If the portion before the @ sign is longer than 21 characters, assign a score of 7 points. Otherwise, do not assign any score.
     - ([0,7] points) If the portion after the @ sign is longer than 24 characters, assign a score of 7 points. Instead, if it is between 15 and 24 characters, assign a score between 0 and 7 that is exponentially relative to the length. Otherwise, do not assign any score.
2. **CC** _(Weight: 15%)_
   - (5 points) If the number of CCs is greater than 10, assign a score of 5. Otherwise, do not assign any score.
   - (8 points) If the domain of **any** of the email addresses belongs to the blocklist _or_ the domain is a misspelling of the top 100 domains, assign a score of 8. Otherwise, do not assign any score.
   - ([0,2] points) If **any** of the email addresses satisfies the following conditions, assign a score of 2. Otherwise, do not assign any score.
     - The portion before the @ sign is longer than 21 characters
     - The portion after the @ sign is longer than 24 characters
3. **Subject** _(Weight: 10%)_
   - ([0,5] points) Assign a score between 0 and 5 that is the ratio of the number of misspelled words in the subject to the total number of words in the subject.
   - ([0,5] points) Assign a score between 0 and 5 that is the ratio of the subject's number of commonly used phishing terms to the subject's total words.
4. **Date** _(Weight: 1%)_
   - ([0,1] points) If the email was sent at 0 _or_ 1 (24 hour time), assign a score of 1. Instead, if the email was not sent during the common work hours of 9 to 17 (24 hour time), assign a score of `abs(hour - 9) / 7` if the hour is less than 9 or `abs(hour - 17) / 7` if the hour is greater than 17. Otherwise, do not assign any score.
5. **Body Content** _(Weight: 39%)_
   - ([0,17] points) Body Content
     - ([0,7] points) Assign a score between 0 and 7 that is the ratio of the number of misspelled words in the body to the total number of words in the body.
     - ([0,10] points) Assign a score between 0 and 10 that is the ratio of the body's number of commonly used phishing terms to the body's total words.
   - ([0,22] points) Hyperlinks
     - ([0,17] points) Assign a score between 0 and 17 that is a weighted sum taking into account the number of "hidden" URLs in the body and the number of legitimate "hidden" URLs in the body.
     - ([0,5] points) Assign a score between 0 and 5 that is relative to the length of any/all of the URLs in the body.
6. **Attachments** _(Weight: 8%)_
   - ([0,6] points) Assign a score between 1 and 6 according to each attachment's extension's safety rating, for a total of 6 points. If there are no attachments, do not assign any score.
   - ([0,1] points) Assign a score between 0 and 1 that is the ratio of the sum of the ratios of the number of misspelled words in each attachment filename to the total number of words in each attachment filename to the total number of attachments.
   - ([0,1] points) Assign a score between 0 and 1 that is the ratio of the sum of the ratios of the number of common phishing terms in each attachment filename to the total number of common phishing terms in each attachment filename to the total number of attachments.

## Key Skills

- JavaScript
- React
- Python
- Flask API
- CSS/HTML

## Libraries

### Python

- [disposable-email-domains](https://pypi.org/project/disposable-email-domains/)
  - Provides a set of known disposable/suspicious email domains
  - Used in our project to determine whether the sender's email address or the CC'd addresses contained a disposable email domain
- [eml-parser](https://pypi.org/project/eml-parser/)
  - Parses .eml files and returns the email's information in accessible/readable formats
  - Used in our project to convert the user's .eml file to .json and extract all the needed information such as the contents of the subject, body, and attachments
- [jellyfish](https://pypi.org/project/jellyfish/)
  - Employs string metrics such as the Levenshtein Distance and the Jaro Distance to compute the similarity between strings
  - Used in our project to determine whether the sender's email address or the CC'd addresses contained a slightly misspelled version of the top 100 email domains (example: gmail.co instead of gmail.com, or yah00.com instead of yahoo.com)
- [pyspellchecker](https://pypi.org/project/pyspellchecker/)
  - Determines if a word is a misspelling of any word in the English dictionary
  - Used in our project to check for misspelled words in the email's subject, body, and attachments
- [requests](https://pypi.org/project/requests/)
  - A very popular HTTP library for Python with many capabilities
  - Used in our project to scrape a raw list of the top website domains instead of having to store the list locally
  
  
### JavaScript

- [chart.js](https://www.chartjs.org/)
  - A free, open-source JavaScript library for data visualization, which supports eight chart types
  - Used in our project to display the percentage of overall risk contribution and phishing possibility
- [concurrently](https://www.npmjs.com/package/concurrently)
  - A simple method to run multiple commands concurrently
  - Used in our project to run both client- and server- sides concerently
- [react-dropzone](https://react-dropzone.js.org/)
  - A React hook to create a HTML5-compliant drag and drop zone for files
  - Used in our project to create a drop zone to upload an .eml file
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
  - provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view
  - Used in our project to display a loading spinner while .eml file is processed
- [react-promise-tracker](https://www.npmjs.com/package/react-promise-tracker)
  - Track blocking promises and control a display of loading indicators
  - Used in our project to track a duration for a loading spinner while .eml file is processed
- [simple-react-lightbox](https://www.npmjs.com/package/simple-react-lightbox)
  - Provide a lightbox functionality on a set of images
  - Used in our project to enlarge an Engineering Red Flag image
