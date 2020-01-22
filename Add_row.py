import sqlite3
from sqlite3 import Error


def add_user(conn, full_name, total_points=0, num_of_events=0):
    sql = ''' INSERT INTO users(full_name, total_points, num_of_events)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, (full_name, total_points, num_of_events))
    return cur.lastrowid


def add_location(conn, name, days_since_last_event=-1, votes=0):
    sql = ''' INSERT INTO locations(name, days_since_last_event, votes)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, (name, days_since_last_event, votes))
    return cur.lastrowid


def add_events(conn, location_id, date, total_num_of_bags=0, num_of_participants=0):
    sql = ''' INSERT INTO events(location_id, date, total_num_of_bags, num_of_participants)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, (location_id, date, total_num_of_bags, num_of_participants))
    conn.commit()
    cur.close()
    return cur.lastrowid


def add_user_at_event(conn, user_id, event_id, points=0):
    sql = ''' INSERT INTO user_at_event(user_id, event_id, points)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, (user_id, event_id, points))
    cur.execute(f'''UPDATE events 
                    SET num_of_participants = num_of_participants + 1 
                    WHERE id={event_id}''')
    conn.commit()
    cur.close()
    return cur.lastrowid


def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)
    return conn


def main():
    database = r"Litterboard.db"
    conn = create_connection(database)
    with conn:
        # user = ('Yona', '12', '1')
        # project_id = add_user(conn, user)
        user_event = add_user_at_event(conn, 1, 1)


if __name__ == '__main__':
    main()
