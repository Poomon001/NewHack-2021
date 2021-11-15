from flask import Flask, request, url_for
from flask_cors import CORS, cross_origin
from werkzeug.utils import redirect

app = Flask(__name__, static_folder="../build")
cors = CORS(app)

@app.route("/postAPI", methods=["POST"])
def post():
    print('\n+========== post app ==========+\n')
    req = request.data
    # print(req)
    return {"sender": 20,
            "subject": 4, 
            "cc": 10,
            "date": 1,
            "bodyContent": 20,
            "attachments": 10,
            "total": 65
            }


if __name__ == '__main__':
    app.run(debug=True)