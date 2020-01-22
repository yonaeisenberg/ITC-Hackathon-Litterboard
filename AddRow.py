import sqlite3
from flask import Blueprint, request
import pandas as pd

addrow_app = Blueprint('AddRow', __name__)
DB_FILENAME = 'Litterboard.db'


@addrow_app.route('/add_user')
def add_user(name=None, total_points=0, num_of_events=0):
    with sqlite3.connect(DB_FILENAME) as conn:
        if name is None:
            name = request.args.get('name').capitali()
        sql = '''INSERT INTO users(full_name, total_points, num_of_events)
                  VALUES(?,?,?) '''
        cur = conn.cursor()
        try:
            cur.execute(sql, (name, total_points, num_of_events))
        except sqlite3.Error:
            return f'User {name} already exists.'
        conn.commit()
        cur.close()
    return f'User {name} was successfully added!'


@addrow_app.route('/add_location')
def add_location(name=None, days_since_last_event=-1, votes=0):
    with sqlite3.connect(DB_FILENAME) as conn:
        if name is None:
            name = request.args.get('name')
        sql = ''' INSERT INTO locations(name, days_since_last_event, votes)
                  VALUES(?,?,?) '''
        cur = conn.cursor()
        try:
            cur.execute(sql, (name, days_since_last_event, votes))
        except sqlite3.Error:
            return f'Location "{name}" already exists.'
        conn.commit()
        cur.close()
    return f'Location "{name}" was successfully added!'


@addrow_app.route('/add_event')
def add_events(location=None, date=None, total_num_of_bags=0, num_of_participants=0):
    with sqlite3.connect(DB_FILENAME) as conn:
        if location is None:
            location = request.args.get('location')
        if date is None:
            date = request.args.get('date')
        date = pd.to_datetime(date, infer_datetime_format=True)
        sql = ''' INSERT INTO events(location_id, date, total_num_of_bags, num_of_participants)
                  VALUES(?, ?, ?, ?) '''
        cur = conn.cursor()
        try:
            cur.execute(f'''SELECT id FROM locations where name={location}''')
            location_id = cur.fetchall()[0][0]
        except KeyError:
            return f"Location {location} does not exist."
        cur.execute(sql, (location_id, date, total_num_of_bags, num_of_participants))
        event_id = cur.lastrowid
        conn.commit()
        cur.close()
    return f'A new event at "{location}" on date "{date}" was successfully added! Event id: {event_id}'


@addrow_app.route('/add_user_at_event')
def add_user_at_event(user_id=None, event_id=None, points=0):
    with sqlite3.connect(DB_FILENAME) as conn:
        sql = ''' INSERT INTO user_at_event(user_id, event_id, points)
                  VALUES(?,?,?) '''
        cur = conn.cursor()
        cur.execute(sql, (user_id, event_id, points))
        cur.execute(f'''UPDATE events 
                        SET num_of_participants = num_of_participants + 1 
                        WHERE id={event_id}''')
        conn.commit()
        cur.close()
    return f'User {user_id} successfully registered to event {event_id}'


def main():
    pass
    # database = r"Litterboard.db"
    # with conn:
    #     user_event = add_events(conn, 1, 1582976800)


if __name__ == '__main__':
    main()
