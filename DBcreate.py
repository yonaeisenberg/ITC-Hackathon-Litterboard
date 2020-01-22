import sqlite3

DB_FILENAME = 'Litterboard.db'

with open('Litterboard-DB.sql', 'r') as f:
    text = f.read()

with sqlite3.connect(DB_FILENAME) as con:
    cur = con.cursor()
    for query in text.split(';'):
        cur.execute(query)
    con.commit()
    cur.close()
