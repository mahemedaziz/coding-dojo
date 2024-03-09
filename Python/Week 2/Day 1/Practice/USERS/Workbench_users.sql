SELECT * FROM users.users;
INSERT INTO users.users (first_name, last_name, email) 
VALUES('Aziz', 'Berrais', 'aziz@outlook.com'),('Eya', 'Berrais', 'Eya@outlook.com'),('Amen Allah', 'Berrais', 'amen@outlook.com');
SELECT * FROM users WHERE id <= 3;
SELECT * FROM users LIMIT 3;
select email FROM users WHERE id =1;
SELECT * FROM users WHERE id = 7;
UPDATE users
SET id = 3, first_name = 'aziz', last_name = 'Berrais' , email = 'Pancakes'
WHERE id = 3;
DELETE FROM users WHERE id = 2;
SELECT first_name FROM users;
SELECT *FROM users ORDER BY first_name DESC;
SELECT *FROM users ORDER BY id DESC;

