from flask import Flask
from FetchBoard import fetchboard_app
from AddRow import addrow_app
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(fetchboard_app)
app.register_blueprint(addrow_app)
