from flask import Flask, request, url_for
from flask_cors import CORS, cross_origin
from werkzeug.utils import redirect

from backend import calculate_score

app = Flask(__name__, static_folder="../build")
cors = CORS(app)

@app.route("/postAPI", methods=["POST"])

def post():
    score = [0,0,0,0,0,0,0]
    print('\n+========== post app ==========+\n')
    req = request.data
    # print(req)

    score = calculate_score(req)

    # try:
    #     score = (calculate_score(req))
    #     print(score)
    # except (Exception):
    #     print()

    return {"sender": score[0],
            "subject": score[2], 
            "cc": score[1],
            "date": score[3],
            "bodyContent": score[4],
            "attachments": score[5],
            "total": score[6]
            }


if __name__ == '__main__':
    app.run(debug=True)