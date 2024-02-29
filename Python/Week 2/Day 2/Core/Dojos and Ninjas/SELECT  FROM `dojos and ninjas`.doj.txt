SELECT * FROM `dojos and ninjas`.dojos;


INSERT INTO dojos (name) 
VALUES('dojo 1'),
	  ('dojo 2'),
	  ('dojo 3');
      
DELETE FROM dojos WHERE id<=3;

INSERT INTO dojos (name) 
VALUES('dojo 4'),
	  ('dojo 5'),
	  ('dojo 6');
      
SELECT * FROM `dojos and ninjas`.ninjas;
SELECT * FROM ninjas;
SELECT * FROM `dojos and ninjas`.dojos;
insert into dojos (name) values("dojo1");

INSERT INTO  ninjas (first_name , last_name, age,dojo_id) 
VALUES('naruto', 'uzumaki' , 18 ,1),
	  ('sasuke', 'utchiwa' , 18 ,1),
	  ('chikamaro', 'tobi' , 18 , 1);	

insert into dojos (name) values("dojo2");

INSERT INTO  ninjas (first_name , last_name, age,dojo_id) 
VALUES('aziz', 'Berrais' , 31 ,2),
	  ('eya', 'berrais' , 20 ,2),
	  ('amenallah', 'berrais' , 16 , 2);
      
insert into dojos (name) values("dojo3");
INSERT INTO  ninjas (first_name , last_name, age,dojo_id) 
VALUES('ahlem', 'Berrais' , 49 ,3),
	  ('olfa', 'berrais' , 45 ,3),
	  ('zoubayer', 'berrais' , 43 , 3);

SELECT *
FROM ninjas
WHERE dojo_id = 1;

SELECT *
FROM ninjas
WHERE dojo_id = 3;

SELECT dojos.*
FROM dojos
JOIN ninjas ON dojos.id = ninjas.dojo_id
ORDER BY ninjas.id DESC
LIMIT 1;

SELECT *
FROM dojos
JOIN ninjas ON dojos.id = ninjas.dojo_id
ORDER BY ninjas.id DESC
LIMIT 1;

SELECT *,dojos.name as dojo_name
FROM ninjas
JOIN dojos ON ninjas.dojo_id = dojos.id
WHERE ninjas.id = 15;

SELECT ninjas.*, dojos.name AS dojo_name
FROM ninjas
JOIN dojos ON ninjas.dojo_id = dojos.id;
