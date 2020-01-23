from flask import Blueprint, request
import sqlite3
import pandas as pd
import datetime as dt

eventlist_app = Blueprint('EventList', __name__)
DB_FILENAME = 'Litterboard.db'


@eventlist_app.route('/EventList')
def event_list():
    with sqlite3.connect(DB_FILENAME) as con:
        df = pd.read_sql('''SELECT locations.name as Area, strftime('%Y-%m-%d',datetime(events.date,'unixepoch')) as Date, 
        events.total_num_of_bags AS "Number of bags collected", events.num_of_participants as "Number of participants", events.id as event_id, locations.id as location_id
        from events join locations on events.location_id = locations.id
        order by Date DESC''', con)
    df.index = range(1, len(df) + 1)
    df['IsFuture'] = df.Date.apply(lambda x: x > dt.datetime.today().strftime('%Y-%m-%d'))
    print(df.loc[df['IsFuture'],'event_id'].values)
    return df.T.to_json()


@eventlist_app.route('/FetchEventInfo')
def fetch_event_info(event_id=None):
    with sqlite3.connect(DB_FILENAME) as con:
        if event_id is None:
            event_id = request.args.get('event_id')
        df = pd.read_sql(f'''SELECT locations.name, strftime('%Y-%m-%d',datetime(events.date,'unixepoch')) as Date 
                        from events join locations on events.location_id = locations.id 
                        where events.id={event_id}''', con)
        return df.T.to_json()
