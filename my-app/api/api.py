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
    return {"status": 201, 
            "data": "hello world"}


if __name__ == '__main__':
    app.run(debug=True)