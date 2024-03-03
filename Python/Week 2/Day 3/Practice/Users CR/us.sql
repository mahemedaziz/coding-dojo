SELECT * FROM user_cr.users;

-- create Users names

insert into users (first_name , last_name , email)
values ('Bob','Marley', 'bob@marleycom');

select * from	users
where id = 1;
update users set first_name = "mohamed" where id=4;
update users set first_name = 'mohamed aziz', last_name = 'aaaaaa', email = 'aziz.berrais@sofrapro.fr' where id=4;