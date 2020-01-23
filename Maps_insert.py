import gmaps
import geopy
from flask import Flask, render_template, abort, Blueprint, request
import pandas as pd
import sqlite3
import urllib

DB_FILENAME = 'Litterboard.db'
# app = Flask(__name__)

place_app = Blueprint('Maps_insert', __name__)

locator = geopy.Nominatim(user_agent='myGeocoder', timeout=10)


class Place:
    def __init__(self, location_id, name, point):
        self.id = location_id
        self.name = name
        self.lat = locator.geocode(self.name).latitude
        self.lng = locator.geocode(self.name).longitude
        self.point = point


# @place_app.route("/place")
# def index():
#     return render_template('list_of_place.html', places=places)
with sqlite3.connect(DB_FILENAME) as con:
    df_place = pd.read_sql('''SELECT l.id as location_id, l.name as Name , max(e.total_num_of_bags) as Total
                            FROM locations as l left outer join events as e 
                            on l.id = e.location_id
                            group by l.id
                            ''', con)
df_place.fillna(1, inplace=True)
places = []
for i in range(len(df_place)):
    places.append(Place(df_place.loc[i, 'location_id'], df_place.loc[i, 'Name'] + ', Tel Aviv, Israel',
                            int(df_place.loc[i, 'Total'])))


places_by_id = {place.id: place for place in places}


@place_app.route("/place")
def show_place(location_id=None):
    if location_id is None:
        location_id = request.args.get('location_id')
    try:
        place = places_by_id[int(location_id)]
    except KeyError:
        return 'Error: unknown location id'
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
