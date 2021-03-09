CREATE DATABASE IF NOT EXISTS entries;

USE entries;

CREATE TABLE entry (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100), 
    user VARCHAR(100), 
    postDate DATETIME,
    assigness VARCHAR(100),
    workflow VARCHAR(100),
    reviewScore VARCHAR(100),
    urlImage TEXT),
    PRIMARY KEY(id)
);

DESCRIBE user; 

SELECT * FROM user; 