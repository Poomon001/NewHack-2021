from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin
from backend import calculate_score

app = Flask(__name__, static_folder='my-app/build', static_url_path='')
CORS(app)

@app.route("/postAPI", methods=["POST"])
@cross_origin()
def post():
    score = [0,0,0,0,0,0,0]
    req = request.data

    score = calculate_score(req)

    # convert to 100%
    total = score[6]
    if total != 0:
        for i in range(len(score)-1):
            score[i] = round(((score[i]/total)*100),2) 
    else:
        score[6] = 0
    
    print(score)

    return {"sender": score[0],
            "subject": score[2], 
            "cc": score[1],
            "date": score[3],
            "bodyContent": score[4],
            "attachments": score[5],
            "total": score[6]
            }

@app.route("/getAPI", methods=["GET"])
@cross_origin()
def get():
    return {"sender": "foobar",
    }

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()