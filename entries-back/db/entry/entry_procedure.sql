USE entries; 

DELIMITER $$
USE `entries`$$

CREATE PROCEDURE `entryAddEdit` (
  IN _id INT,
  IN _title VARCHAR(100),
  IN _user VARCHAR(100),
  IN _postDate DATETIME,
  IN _assigness VARCHAR(100), 
  IN _workflow VARCHAR(100), 
  IN _reviewScore VARCHAR(100), 
  IN _urlImage TEXT 
)

BEGIN 
  IF _id = 0 THEN
    INSERT INTO entry (title, user, postDate, assigness, workflow, reviewScore, urlImage)
    VALUES (_title, _user, _postDate, _assigness, _workflow, _reviewScore, _urlImage);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE entry
    SET
    title = _title,
    user = _user,
    postDate = postDate,
    assigness = _assigness,
    workflow = _workflow,
    reviewScore = _reviewScore,
    urlImage = _urlImage
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END