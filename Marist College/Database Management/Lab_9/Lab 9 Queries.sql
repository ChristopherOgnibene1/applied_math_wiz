--CHRIS OGNIBENE
--PROFESSOR LABOUSEUR
--CMPT 308 - 111

--LAB 9: NORMALIZATION 3

--DROP QUERIES
drop table if exists engineers;
drop table if exists astronauts;
drop table if exists flight_controllers;
drop table if exists crew;

drop table if exists crew_in;
drop table if exists repairs;
drop table if exists catalog_store;
drop table if exists suppliers;
drop table if exists zip_code;
drop table if exists systems_parts;
drop table if exists systems_in;
drop table if exists systems;
drop table if exists space_craft;
drop table if exists parts;

drop table if exists people;

--CREATE QUERIES
create table people (

  pid varchar(10) not null unique primary key
, fn varchar(20)
, ln varchar(20)
, age int
);

create table engineers (

  pid varchar(10) not null unique references people(pid)
, highest_deg varchar(20)
, fav_videogame varchar(20)
);

create table astronauts (

  pid varchar(10) not null unique references people(pid)
, yrs_flying decimal
, golf_handicap varchar(20)
);

create table flight_controllers (

  pid varchar(10) not null unique references people(pid)
, preferred_chair varchar(20)
, preferred_drink varchar(20)
);

create table crew (

  pid varchar(10) not null unique references people(pid)
, yr_flight int
, flying_exp varchar(20)
);


create table space_craft (

  spacecraft_name varchar(50) not null unique
, tail_num int not null unique
, weight_UStons decimal
, fuel_type varchar(20)
, crew_capacity int
, condition varchar(20)
, user_comments text
, primary key (spacecraft_name, tail_num)
);

create table crew_in (

  pid varchar(10) not null references people(pid)
, spacecraft_name varchar(50) not null references space_craft(spacecraft_name)
);

create table parts (

  part_num varchar(20) not null unique primary key
, name varchar(20)
, descrip text
, date_installed date
, condition varchar(20)
, user_comments text
); 

create table systems (

  systems_name varchar(20) not null unique primary key
, descrip text
, condition varchar(20)
, user_comments text
);

create table systems_in (
  systems_name varchar(20) not null references systems(systems_name)
, spacecraft_name varchar(20) not null references space_craft(spacecraft_name)
);

create table systems_parts (

  systems_name varchar(50) not null references systems(systems_name)
, part_num varchar(10) not null references parts(part_num)
);

create table repairs (

  part_num varchar(10) not null references parts(part_num)
, date_renovated date
, user_comments text
);

create table zip_code (

  zip int not null unique primary key
, city varchar(50)
, state varchar(5)
); 

create table suppliers (

  sid varchar(10) not null unique primary key
, name varchar(30)
, street text
, zip int not null references zip_code(zip)
, discount_pct decimal
, payment_type text
);

create table catalog_store (

  sid varchar(10) not null references suppliers(sid)
, part_num varchar(10) not null references parts(part_num)
);


--INSERT QUERIES
insert into people
values ('p1','Frank','Sinatra',70)
	, ('p2','Frankie','Valli',64)
	, ('p3','Billy','Joel',60)
	, ('p4','Maurice','Gibbs',50)
	, ('p5','Paul','McCartney',64)
	, ('p6','Daniel','Craig',47);

insert into engineers 
values ('p1','Bachelors','Soul Calibur V');

insert into astronauts 
values ('p2',5,'none');

insert into flight_controllers 
values ('p3','plush','red bull');

insert into crew 
values ('p4',1971,'Advanced');

insert into space_craft (spacecraft_name,tail_num,weight_UStons,fuel_type,crew_capacity,condition)
values ('The New York',1,58,'Rocket',10,'Mint')
	, ('Grease',2,234,'Rocket',5,'Poor')
	, ('The Piano Man',3,32,'Jet',20,'Fair')
	, ('The Massachusetts',4,704,'Jet',30,'Excellent');

insert into crew_in (pid, spacecraft_name)
values ('p1','The New York')
	, ('p2','Grease')
	, ('p3','The Piano Man')
	, ('p4','The Massachusetts');

insert into parts (part_num,name,date_installed,condition)
values ('pa1','frame','3-3-2002','good')
	, ('pa2','screw','5-23-1987','poor')
	, ('pa3','dial','2-7-1994','fair')
	, ('pa4','wires','10-2-2009','excellent')
	, ('pa5','transistor','4-3-2014','pristine');

insert into systems (systems_name,descrip,condition)
values ('Radio','to mission','fair')
	, ('Air Lock','controls air seal','fair')
	, ('Control Dashboard','flight controls','good')
	, ('GPS','satellite','good');

insert into systems_in
values ('Radio','The New York')
     , ('Air Lock','The Piano Man')
     , ('Control Dashboard','The Piano Man')
     , ('GPS','The Massachusetts');

insert into systems_parts
values ('Radio','pa1')
	, ('Radio','pa2')
	, ('Control Dashboard','pa3')
	, ('GPS','pa4');

insert into repairs (part_num,date_renovated)
values ('pa1','3-5-2013')
	, ('pa2','4-8-2014')
	, ('pa4','6-30-2012');

insert into zip_code
values (20004,'Washington','D.C')
	, (74103,'Tulsa','OK')
	, (83701,'Boise','ID');

insert into suppliers
values ('s1','Boeing','classified',20004,30,'credit,check')
	, ('s2','Lockheed Martin','classified',74103,15,'credit,check')
	, ('s3','Space Systems/Loral','classified',83701,23,'credit');

insert into catalog_store (sid,part_num)
values ('s1','pa1')
	, ('s2','pa2')
	, ('s3','pa3');

--SELECT QUERIES
select * from engineers;
select * from astronauts;
select * from flight_controllers;
select * from crew;
select * from people;
select * from crew_in;
select * from repairs; --can insert duplicate data
select * from parts;
select * from zip_code;
select * from suppliers;
select * from catalog_store; --can insert duplicate data
select * from systems_parts; --can insert duplicate data
select * from systems;
select * from space_craft;
select * from systems_in;

--TEST QUERIES
--Note: This query below makes no sense, but did it basically to test solely the functionality of my design and to verify that code runs.  This query links all the tables together.  

--Want the first and last name of anyone who has the zip code 20004.
select pe.fn, pe.ln
from people pe, 
     crew c,
     crew_in c_i,
     space_craft s_c,
     systems_in sys_in,
     systems sys,
     systems_parts s_p,
     parts pa,
     catalog_store c_s,
     suppliers sup,
     zip_code z_c
where z_c.zip = sup.zip
  and sup.sid = c_s.sid
  and c_s.part_num = pa.part_num
  and pa.part_num = s_p.part_num
  and s_p.systems_name = sys.systems_name
  and sys.systems_name = sys_in.systems_name
  and sys_in.spacecraft_name = s_c.spacecraft_name
  and s_c.spacecraft_name = c_i.spacecraft_name
  and c_i.pid = pe.pid
  and z_c.zip = 20004;