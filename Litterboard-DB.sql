CREATE TABLE `events` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `location_id` INTEGER,
  `date` datetime,
  `total_num_of_bags` INTEGER,
  `num_of_participants` INTEGER,
  UNIQUE(location_id,date),
  CONSTRAINT `events_fk` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`)
);

CREATE TABLE `users` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `full_name` CHAR(255),
  `total_points` INTEGER,
  `num_of_events` INTEGER,
  UNIQUE(full_name)
);

CREATE TABLE `user_at_event` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `user_id` INTEGER,
  `event_id` INTEGER,
  `points` INTEGER,
  CONSTRAINT `user_at_event_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_at_event_fk2` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
);

CREATE TABLE `locations` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` CHAR(255),
  `days_since_last_event` INTEGER,
  `votes` INTEGER,
  UNIQUE(name)
);







