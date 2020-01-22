from flask import Blueprint, request, render_template, session, redirect
import numpy as np
import pandas as pd
import sqlite3

fetchboard_app = Blueprint('FetchBoard', __name__)
DB_FILENAME = 'Litterboard.db'


@fetchboard_app.route('/board/<type>')
def fetch_board(type):
    if type == 'general':
        with sqlite3.connect(DB_FILENAME) as con:
            df = pd.read_sql('''SELECT full_name as Name, total_points as Points, num_of_events as "Number of events" 
                            from users order by total_points DESC''', con)
            df.index = range(1, len(df)+1)
    if type == 'event':
        with sqlite3.connect(DB_FILENAME) as con:
            event_id = request.args.get('id')
            df = pd.read_sql(f'''SELECT full_name as Name, points as Points 
                            FROM users JOIN user_at_event ON users.id = user_at_event.user_id 
                            WHERE user_at_event.event_id = {event_id} order by points DESC''', con)
            df.index = range(1, len(df) + 1)
    return df.T.to_json()  # render_template('general_board.html', tables=[df.to_html(classes='data', header=True)])


if __name__ == '__main__':
    fetchboard_app.run(host='0.0.0.0')
