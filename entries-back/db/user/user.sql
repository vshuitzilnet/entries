CREATE DATABASE IF NOT EXISTS entries;

USE entries;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100), 
    username VARCHAR(100), 
    email VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY(id)
);

DESCRIBE user; 

SELECT * FROM user; 
