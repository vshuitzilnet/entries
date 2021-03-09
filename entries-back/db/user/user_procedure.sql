USE entries; 

DELIMITER $$
USE `entries`$$

CREATE PROCEDURE `userAddEdit` (
  IN _id INT,
  IN _name VARCHAR(100),
  IN _username VARCHAR(100),
  IN _email VARCHAR(100),
  IN _password VARCHAR(100) 
)

BEGIN 
  IF _id = 0 THEN
    INSERT INTO user (name, username, email, password)
    VALUES (_name, _username, _email, _password);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE user
    SET
    name = _name, 
    username = _username, 
    email = _email,
    password = _password
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END

