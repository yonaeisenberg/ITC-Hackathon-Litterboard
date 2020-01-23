from flask import Blueprint, request
import pandas as pd
import sqlite3

fetchlocations_app = Blueprint('FetchLocations', __name__)
DB_FILENAME = 'Litterboard.db'


@fetchlocations_app.route('/fetch_locations')
def fetch_board():
    with sqlite3.connect(DB_FILENAME) as con:
        df = pd.read_sql('''SELECT name as Area, days_since_last_event as "Days since last event", votes as Votes, id  
                                       from locations order by votes DESC''', con)
        df.index = range(1, len(df) + 1)
    return df.T.to_json()


@fetchlocations_app.route('/vote')
def vote(location_id=None):
    if location_id is None:
        location_id = request.args.get('location_id')
    with sqlite3.connect(DB_FILENAME) as con:
        cur = con.cursor()
        cur.execute(f'''UPDATE locations SET votes = votes + 1 where id ={location_id}''')
        con.commit()
        cur.close()
    return fetch_board()


if __name__ == '__main__':
    fetchlocations_app.run(host='0.0.0.0')
