INSERT INTO 'users'('full_name', 'total_points', 'num_of_events') VALUES
	('Avner', 245, 2),
	('Arielle', 272, 3),
	('David', 255, 3),
	('Elsa', 301, 2),
	('Yona', 282, 3);


INSERT INTO 'locations' ('name', 'days_since_last_event', 'votes') VALUES
  ('Gordon Beach', -1, 20),
  ('Florentine', -1, 10),
  ('Old North', -1, 2),
  ('Shouk ha Carmel', -1, -1),
  ('Jaffa Beach', -1,11),
  ('Marina', -1,50),
  ('Sarona', -1,-1);


INSERT INTO 'events' ('location_id', 'date', 'total_num_of_bags', 'num_of_participants') VALUES
	(1,	1581080400,	190,	60),
	(2,	1584468000,	160,	50),
	(3,	1582876800,	155,	62),
	(5,	1580385600,	213,	80),
	(2,	1590163200,	65,	50),
	(1,	1595419200,	60,	32),
	(7,	1586242800,	90,	22),
	(1,	1581080401,	189,	63),
	(2,	1581080400,	206, 76),
	(4,	1579768222,	260,	95),
	(7,	1579973422,	230,	72),
	(3,	1581679822,	183,	50),
	(1,	1583321422,	122,	40),
	(3,	1589801422,	70,	21),
	(6,	1589284800,	54,	31),
	(5,	1606822222,	56,	1);

INSERT INTO 'user_at_event' ('user_id', 'event_id', 'points') VALUES
  (2, 1	, 52),
  (1, 2	, 12),
  (5, 3	, 101),
  (4, 5	, 105),
  (4, 2	, 62),
  (2, 3	, 43),
  (3, 4	, 47);