from flask import Flask, request, render_template, session, redirect
import numpy as np
import pandas as pd
import sqlite3

app = Flask(__name__)
DB_FILENAME = 'Litterboard.db'


@app.route('/board/<type>')
def fetch_board(type):
    if type == 'general':
        with sqlite3.connect(DB_FILENAME) as con:
            df = pd.read_sql('''SELECT full_name as Name, total_points as Points, num_of_events as "Number of events" 
                            from users order by total_points''', con)
    return render_template('general_board.html', tables=[df.to_html(classes='data', header=True)])


if __name__ == '__main__':
    app.run(host='0.0.0.0')
