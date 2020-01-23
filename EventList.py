from flask import Blueprint, request
import sqlite3
import pandas as pd

eventlist_app = Blueprint('EventList', __name__)
DB_FILENAME = 'Litterboard.db'


@eventlist_app.route('/EventList')
def event_list():
    with sqlite3.connect(DB_FILENAME) as con:
        df = pd.read_sql('''SELECT locations.name as Area, strftime('%Y-%m-%d',datetime(events.date,'unixepoch')) as Date, 
        events.total_num_of_bags AS "Number of bags collected", events.num_of_participants as "Number of participants", locations.id
        from events join locations on events.location_id = locations.id
        order by Date DESC''', con)
    df.index = range(1, len(df) + 1)
    return df.T.to_json()
