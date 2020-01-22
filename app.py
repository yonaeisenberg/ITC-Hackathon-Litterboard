from flask import Flask
from FetchBoard import fetchboard_app
from AddRow import addrow_app
from Maps_insert import place_app
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(fetchboard_app)
app.register_blueprint(addrow_app)
app.register_blueprint(place_app)

if __name__ == '__main__':
    app.run(host='localhost', port=7000)
