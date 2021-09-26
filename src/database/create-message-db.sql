DROP DATABASE IF EXISTS message_board_db;   
CREATE DATABASE IF NOT EXISTS message_board_db;

USE message_board_db;

DROP TABLE IF EXISTS user; 

CREATE TABLE user(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(100) NOT NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY ( user_id )
);

DROP TABLE IF EXISTS channel; 

CREATE TABLE channel (
	channel_id INT NOT NULL AUTO_INCREMENT,
	channel_name VARCHAR(100) NOT NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY ( channel_id )
);

DROP TABLE IF EXISTS message; 

CREATE TABLE message (
	message_id INT NOT NULL AUTO_INCREMENT,
	channel_id INT NOT NULL,
	user_id INT NOT NULL,
	message VARCHAR(300) NOT NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY ( message_id )
);

-- INSERT TO user TABLE --
INSERT INTO user (user_id, user_name, created_date) 
	VALUES (1, "Niina Häkkinen", CURRENT_TIMESTAMP);

INSERT INTO user (user_id, user_name, created_date) 
	VALUES (2, "Miili Reponen", CURRENT_TIMESTAMP);

INSERT INTO user (user_id, user_name, created_date) 
	VALUES (3, "Maria Korhonen", CURRENT_TIMESTAMP);

INSERT INTO user (user_id, user_name, created_date) 
	VALUES (4, "Johanna Nieminen", CURRENT_TIMESTAMP);

INSERT INTO user (user_id, user_name, created_date) 
	VALUES (5, "Martti Ahtisaari", CURRENT_TIMESTAMP);

-- INSERT TO channel TABLE --
INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (1, "Daily standup meeting", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (2, "Program incrementing planning", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (3, "Internal communication", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (4, "Project go live", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (5, "Flashback Forum", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (6, "Java and React trainings", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (7, "Leave plans", CURRENT_TIMESTAMP);

INSERT INTO channel (channel_id, channel_name, created_date) 
	VALUES (8, "Team outing", CURRENT_TIMESTAMP);

-- INSERT TO message TABLE --
INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (1, 1, 1, "Need to clear road blocks to complete tasks", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (2, 2, 2, "Need to develop a Restful API", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (3, 3, 3, "Everybody please gather to meeting room", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (4, 4, 4, "Thats amazing, application deploying cool in production!", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (5, 5, 4, "I was thought of build a farm house.", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (6, 6, 3, "Everybody need to install Eclipse", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (7, 7, 2, "I don't have any leave plans till next summer", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (8, 8, 1, "Let's plan for outing", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (9, 8, 4, "Which place to visit", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (10, 8, 3, "What about Lappeenranta", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (11, 8, 5, "Awsome place!", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (112, 8, 2, "Lappeenranta is a city and municipality in the region of South Karelia, about 30 kilometres from the Russian border and 64 kilometres from the town of Vyborg.", CURRENT_TIMESTAMP);

INSERT INTO message (message_id, channel_id, user_id, message, created_date) 
	VALUES (13, 8, 3, "Lappeenranta is a model for renewable energies and a clean living environment.", CURRENT_TIMESTAMP);