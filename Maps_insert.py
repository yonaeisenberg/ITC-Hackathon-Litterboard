# # !pip install geopandas
# # !pip install geopy
# import gmaps
# import geopy
#
#
# gmaps.configure(api_key='AIzaSyAsVgVwpvZRCzuGEbth49xmdgQ34mLq1ng')
#
# locator = geopy.Nominatim(user_agent='myGeocoder')
#
# locations = ['Gordon Beach, Tel Aviv, Israel',
#              'Dizengoff Center, Tel-Aviv, Israel',
#             'Florentin, Tel Aviv, Israel',
#             'HaCarmel Street, Tel-Aviv, Israel',
#             'Jaffa, Tel-Aviv, Israel',
#             'Marina, Tel-Aviv, Israel',
#             'Old North, Tel-Aviv, Israel',
#             'Sarona Market, Tel-Aviv, Israel']
#
# location_pos = []
#
# for location in locations:
#         loc_pos = locator.geocode(location)
#         location_pos.append((loc_pos.latitude, loc_pos.longitude))
#
# heatmap_layer = gmaps.heatmap_layer(location_pos)
# fig = gmaps.figure()
# fig.add_layer(heatmap_layer)
# fig


from flask import Flask, render_template
from flask_googlemaps import GoogleMaps
from flask_googlemaps import Map

app = Flask(__name__, template_folder=".")
GoogleMaps(app)

@app.route("/")
def mapview():
    # creating a map in the view
    mymap = Map(
        identifier="view-side",
        lat=37.4419,
        lng=-122.1419,
        markers=[(37.4419, -122.1419)]
    )
    sndmap = Map(
        identifier="sndmap",
        lat=37.4419,
        lng=-122.1419,
        markers=[
          {
             'icon': 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
             'lat': 37.4419,
             'lng': -122.1419,
             'infobox': "<b>Hello World</b>"
          },
          {
             'icon': 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
             'lat': 37.4300,
             'lng': -122.1400,
             'infobox': "<b>Hello World from other place</b>"
          }
        ]
    )
    return render_template('example.html', mymap=mymap, sndmap=sndmap)

if __name__ == "__main__":
    app.run(debug=True)