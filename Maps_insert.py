import gmaps
import geopy
from flask import Flask, render_template, abort, Blueprint, request
import pandas as pd
import sqlite3

DB_FILENAME = 'Litterboard.db'
# app = Flask(__name__)

place_app = Blueprint('Maps_insert', __name__)

locator = geopy.Nominatim(user_agent='myGeocoder')

with sqlite3.connect(DB_FILENAME) as con:
    df_place = pd.read_sql('''SELECT name as Name
                    FROM locations''', con)

class Place:
    def __init__(self, key, name):
        self.key = key
        self.name = name
        self.lat = locator.geocode(self.name).latitude
        self.lng = locator.geocode(self.name).longitude


places = ()
for i in df_place.Name:
    try:
        places = places + (Place(i[:3].lower(), i+', Tel Aviv, Israel'),)
    except:
        pass
places_by_key = {place.key: place for place in places}


@place_app.route("/place")
def index():
    return render_template('list_of_place.html', places=places)


@place_app.route("/<place_code>")
def show_place(place_code):
    place = places_by_key.get(place_code)
    if place:
        return render_template('map.html', place=place)
    else:
        abort(404)


# if __name__ == '__main__':
#     app.run(host='localhost', debug=True)
def main():
    pass
    # database = r"Litterboard.db"
    # with conn:
    #     user_event = add_events(conn, 1, 1582976800)


if __name__ == '__main__':
    main()
