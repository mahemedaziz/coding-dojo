SELECT * FROM friendships.users;

insert into users(first_name, last_name)
values ( "Amy" , "Donneur"),( "Amy" , "Donneur"),( "Amy" , "Donneur"),( "Eli" , "Byers"),( "Eli" , "Byers"),( "Par Marky" , "Marque");

INSERT into friendships (user_id, friend_id) 
VALUES (1, 2), (1, 4), (1, 6);

INSERT into friendships (user_id, friend_id) 
VALUES (1, 6);

INSERT into friendships (user_id, friend_id) 
VALUES (2, 1), (2, 3), (2, 5);


SELECT * FROM friendships.friendships;


INSERT into friendships (user_id, friend_id) 
VALUES (3, 2), (3, 5);
INSERT into friendships (user_id, friend_id) 
VALUES (4, 3);
INSERT into friendships (user_id, friend_id) 
VALUES (5, 1), (5, 6);
INSERT into friendships (user_id, friend_id) 
VALUES (6, 2), (6, 3);

SELECT * from users 
 JOIN friendships ON user_id=friendships.user_id 
 LEFT JOIN users as users2 ON users2.id = friendships.friend_id;

SELECT users.first_name, users.last_name, users2.first_name as friends_first_name , users2.last_name as friend_last_name from users 
JOIN friendships ON user_id=friendships.user_id 
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;

SELECT users.first_name, users.last_name, users2.first_name as friends_first_name , users2.last_name as friend_last_name from users 
JOIN friendships ON user_id=friendships.user_id 
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;

SELECT users2.first_name as first_name, users2.last_name as last_name, users.first_name as friends_with FROM users
JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id
WHERE users.id = 1;

SELECT COUNT(friendships.user_id) as num_of_friendships from friendships;

SELECT user_id, users.first_name, users.last_name, count(user_id) as num_of_friends from friendships
JOIN users ON users.id = friendships.user_id
GROUP BY user_id
ORDER BY num_of_friends DESC
LIMIT 1;

SELECT users2.first_name as first_name, users2.last_name as last_name, users.first_name as friends_with FROM users
JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id
WHERE users.id = 3
ORDER BY first_name;
