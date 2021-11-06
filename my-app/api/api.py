from flask import Flask, request, jsonify, json
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="../build")
cors = CORS(app)

@app.route("/myAPI", methods=['GET', "POST"])
def index():
    if request.method == 'POST':
        print('post app')
        req = request.data
        print(req)
    return {
        "name": ["Poom", "Jeet", "Harsh"]
    }

if __name__ == '__main__':
    app.run(debug=True)