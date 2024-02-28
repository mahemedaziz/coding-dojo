SELECT * FROM `names my_db names`.names;
INSERT INTO names (name) 
VALUES('Berrais');
INSERT INTO names (name) 
VALUES('Berrais'),('mohamed'),('aziz'),('ben mahmoud'),('zaafar');
UPDATE names
SET name = 'ben mlouka'
WHERE id=2;
DELETE FROM names WHERE id=3;