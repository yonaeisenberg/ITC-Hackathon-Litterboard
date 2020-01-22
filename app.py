from flask import Flask
from FetchBoard import fetchboard_app
from AddRow import addrow_app


app = Flask(__name__)
app.register_blueprint(fetchboard_app)
app.register_blueprint(addrow_app)
