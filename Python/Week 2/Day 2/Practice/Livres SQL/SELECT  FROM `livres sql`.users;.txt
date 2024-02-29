SELECT * FROM `livres sql`.users;
SELECT * FROM `livres sql`.books;
INSERT INTO users (first_name, last_name) 
VALUES('Jane', 'Amsden'),('Emily', 'Dixon'),('Theodore', 'Dostoevsky'),('William', 'Shapiro'),('oLao', 'Xiu');

INSERT INTO books (title) 
VALUES('C Sharp'),('Java'),('Python'),('PHP'),('Ruby');

UPDATE books
SET title = 'c#'
WHERE title = 'C Sharp' ;
SET SQL_SAFE_UPDATES = 0;

UPDATE users
SET first_name = 'Bill'
WHERE first_name = 'William' ;

SELECT * FROM `livres sql`.favorites;

insert into favorites (user_id , book_id)
values (1,1),(1,2);

insert into favorites (user_id , book_id)
values (2,1),(2,2),(2,3);

insert into favorites (user_id , book_id)
values (3,1),(3,2),(3,3),(3,4);

insert into favorites (user_id , book_id)
values (4,1),(4,2),(4,3),(4,4),(4,5);
insert into favorites (user_id , book_id)
values (4,1),(4,2),(4,3),(4,4),(4,5);

SELECT user_id
FROM favorites
WHERE book_id = 3;

-- Query: Retrieve all the users who favorited the 3rd book
SELECT users.first_name, users.last_name FROM users
JOIN favorites on users.id = user_id
JOIN books on favorites.book_id = books.id
WHERE books.id = 3;

-- Query: Remove the first user of the 3rd book's favorites
DELETE from favorites
where book_id = 3 AND user_id = 1;

INSERT into favorites (user_id, book_id) 
VALUES (5, 2);

-- Find all the books that the 3rd user favorited
SELECT title from books
JOIN favorites on favorites.book_id = books.id
WHERE favorites.user_id = 3;

-- Query: Find all the users that favorited to the 5th book
SELECT first_name, last_name from users
JOIN favorites on users.id = favorites.user_id
WHERE favorites.book_id = 5;