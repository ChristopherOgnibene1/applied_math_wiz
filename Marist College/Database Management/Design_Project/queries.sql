/*

  Chris Ognibene
  CMPT 308L - 111
  Professor Labouseur

  Design Project Database

  References:

  http://www.latimes.com/la-et-game-of-thrones-season-two-cheat-sheet-html,0,1229537.htmlstory#axzz2zLi15eGn
  http://gameofthrones.wikia.com/wiki/Game_of_Thrones_Wiki
  http://www.funtrivia.com/en/subtopics/A-Game-of-Thrones-Sigils-and-Mottos-193909.html
  http://gameofthrones.wikia.com/wiki/Noble_house
  http://awoiaf.westeros.org/index.php/Houses_of_Westeros

*/


--DROP VIEW QUERIES
drop view if exists number_inhabitants;
drop view if exists characters_in_families;
drop view if exists relations;
drop view if exists owned_pets;
drop view if exists inhabitants_Casterly_Rock;
drop view if exists characters_around_creatures;

--SELECT VIEW QUERIES
select * from number_inhabitants;
select * from characters_in_families;
select * from relations;
select * from owned_pets;
select * from inhabitants_Casterly_Rock;
select * from characters_around_creatures;

--DROP TABLE QUERIES
drop table if exists creatures_in_region;
drop table if exists chars_religion;
drop table if exists cities_in_regions;
drop table if exists cities;
drop table if exists chars_in_regions;
drop table if exists relationships;
drop table if exists pets;
drop table if exists actors;
drop table if exists creatures;
drop table if exists regions;
drop table if exists religion;
drop table if exists characters;
drop table if exists families;


--SELECT TABLE QUERIES
select * from families;
select * from characters;
select * from actors;
select * from relationships;
select * from regions;
select * from cities;
select * from cities_in_regions;
select * from chars_in_regions;
select * from pets;
select * from creatures;
select * from religion;
select * from chars_religion;
select * from creatures_in_region;




--CREATE TABLE QUERIES

create table if not exists families(

  fid varchar(5) not null unique primary key
, name varchar(50) not null unique
, sigil varchar(50) default 'Not applicable'
, domain varchar(50) default 'Not applicable'
);

create table if not exists characters(

  cid varchar(5) not null unique primary key
, fn varchar(30) not null unique
, ln varchar(30) 
, fid varchar(5) not null references families(fid)
);

create table if not exists actors(

  aid varchar(5) not null unique references characters(cid)
, fn varchar(30) not null
, ln varchar(30) not null
);

create table if not exists relationships(

  person1 varchar(5) not null references characters(cid)
, person2 varchar(5) not null references characters(cid)
, married varchar(30) default 'Not applicable'
, couple varchar(30) default 'Not applicable'
);

create table if not exists regions(

  regid varchar(10) not null unique primary key
, name varchar(30) not null
, temp_degF varchar(10) default 'Not applicable'
, precip_inches varchar(10) default 'Not applicable'
, geography varchar(30) default 'Not applicable'
);

/*old table
create table if not exists cities(

  regid varchar(10) not null references regions(regid)
, city varchar(30) not null
);
*/

create table if not exists cities(

  cityid varchar(10) not null primary key
, name varchar(30) not null
);

create table if not exists cities_in_regions(

  cityid varchar(10) not null references cities(cityid)
, regid varchar(10) not null references regions(regid) 
);

create table if not exists chars_in_regions(

  cid varchar(5) not null references characters(cid)
, regid varchar(10) not null references regions(regid)
);

create table if not exists pets(

  pid varchar(10) not null unique primary key
, name varchar(50) default 'Not applicable'
, type varchar(50) default 'Not applicable'
, habitat varchar(50) default 'Not applicable'
, owner varchar(5) not null references characters(cid)
, diet varchar(50) default 'Not applicable'
);

create table if not exists creatures(

  crid varchar(10) not null unique primary key
, type varchar(50) not null
, habitat varchar(50) default 'Not applicable'
, diet varchar(50) default 'Not applicable'
, language varchar(50) default 'Not applicable'
, features varchar(50) default 'Not applicable'
, status varchar(50) default 'Not applicable'
, society varchar(50) default 'Not applicable'
);

create table if not exists creatures_in_region(

  crid varchar(10) not null references creatures(crid)
, regid varchar(10) not null references regions(regid)
);

create table if not exists religion(

  rid varchar(5) not null unique primary key
, name varchar(50) not null
);

create table if not exists chars_religion(

  cid varchar(5) not null references characters(cid)
, rid varchar(5) not null references religion(rid)
);




--INSERT TABLE QUERIES
insert into families
values ('f1','Stark','Direwolf','North (Exiled)')
	, ('f2','Lannister','Lion','Westerlands')
	, ('f3','Targaryen','Three-Headed Dragon','Essos')
	, ('f4','Baratheon','Stag','Stormlands; Crownlands')
	, ('f5','Greyjoy','Golden Kraken','Iron Islands')
	, ('f6','Night''s Watch','Black','The Wall')
	, ('f7','Frey','Two Towers and Bridge','Riverlands')
	, ('f8','Tyrell','Golden Rose/Green Field','Reach')
	, ('f9','Bolton','Red, upside down flayed man','North')
	, ('f10','Clegane','Three Black Dogs/Yellow Background','Westerlands')
	, ('f11','Tully','Silver Trout','Riverlands (Exiled)')
	, ('f12','Martell','Red Sun/Golden Spear','Dorne')
	, ('f13','Arryn','Moon-and-Falcon','Vale of Arryn')
	, ('f14','Baelish','Head of the Titan of Braavos','Riverlands; Vale of Arryn')
	, ('f15','Free Folk (Wildlings)',null,'North of the Wall');

insert into characters
values ('c1','Eddard','Stark','f1')
	, ('c2','Tyrion','Lannister','f2')
	, ('c3','Cersei','Lannister','f2')
	, ('c4','Robert','Baratheon','f4')
	, ('c5','Daenerys','Targaryen','f3')
	, ('c6','Robb','Stark','f1')
	, ('c7','Arya','Stark','f1')
	, ('c8','Sansa','Stark','f1')
	, ('c9','Catelyn','Stark','f1')
	, ('c10','Jaime','Lannister','f2')
	, ('c11','Joffrey','Baratheon','f4')
	, ('c12','Stannis','Baratheon','f4')
	, ('c13','Theon','Greyjoy','f5')
	, ('c14','Jon','Snow','f6')
	, ('c15','Tywin','Lannister','f2')
	, ('c16','Hodor',null,'f1')
	, ('c17','Walder','Frey','f7')
	, ('c18','Margaery','Tyrell','f8')
	, ('c19','Roose','Bolton','f9')
	, ('c20','Gregor','Clegane','f10')
	, ('c21','Melisandre',null,'f4')
	, ('c22','Drogo',null,'f3')
	, ('c23','Shae',null,'f2')
	, ('c24','Osha',null,'f1')
	, ('c25','Ygritte',null,'f15')
	, ('c26','Samwell','Tarly','f15')
	, ('c27','Petyr ''Littlefinger'' ','Baelish','f14')
	, ('c28','Talisa','Stark','f1')
	, ('c29','Gilly',null,'f15');

insert into actors
values ('c1','Sean','Bean')
	, ('c2','Peter','Dinklage')
	, ('c3','Lena','Headey')
	, ('c4','Mark','Addy')
	, ('c5','Emilia','Clarke')
	, ('c6','Richard','Madden')
	, ('c7','Maisie','Williams')
	, ('c8','Sophie','Turner')
	, ('c9','Michelle','Fairley')
	, ('c10','Nikolaj','Coster-Waldau')
	, ('c11','Jack','Gleeson')
	, ('c12','Stephen','Dillane')
	, ('c13','Alfie','Allen')
	, ('c14','Kit','Harington')
	, ('c15','Charles','Dance')
	, ('c16','Kristian','Nairn')
	, ('c17','David','Bradley')
	, ('c18','Natalie','Dormer')
	, ('c19','Michael','McElhatton')
	, ('c20','Conan','Stevens')
	, ('c21','Carice','Van Houten')
	, ('c22','Jason','Momoa')
	, ('c23','Sibel','Kekilli')
	, ('c24','Natalie','Tena')
	, ('c25','Rose','Leslie')
	, ('c26','John','Stevens')
	, ('c27','Aiden','Gillen')
	, ('c28','Oona','Chaplin')
	, ('c29','Hannah','Murray');

insert into relationships
values ('c1','c9','yes',null)
	, ('c6','c28','yes',null)
	, ('c5','c22','yes',null)
	, ('c14','c25',null,'yes')
	, ('c26','c29',null,'yes')
	, ('c2','c8','yes',null);

insert into regions
values ('reg1','Westeros',null,null,null)
	, ('reg2','Riverlands',null,null,null)
	, ('reg3','The North',null,null,null)
	, ('reg4','Essos',null,null,null)
	, ('reg5','Dothraki',null,null,null)
	, ('reg6','Craster''s Keep',null,null,null);

insert into cities
values ('city1','Winterfell')
	, ('city2', 'Westerlands')
	, ('city3', 'The Stormlands')
	, ('city4', 'The Realm')
	, ('city5', 'Dragonstone')
	, ('city6', 'Iron Islands')
	, ('city7', 'The Wall')
	, ('city8', 'Casterly Rock')
	, ('city9', 'The Crossing')
	, ('city10', 'The Reach')
	, ('city11', 'Dreadfort')
	, ('city12', 'Asshai')
	, ('city13', 'Dothraki Sea')
	, ('city14', 'Lorath')
	, ('city15', 'North of the Wall')
	, ('city16', 'King''s Landing')
	, ('city17', 'Volantis');

insert into cities_in_regions
values ('city1','reg1')
	, ('city2','reg1')
	, ('city3','reg1')
	, ('city4','reg1')
	, ('city5','reg1')
	, ('city6','reg1')
	, ('city7','reg1')
	, ('city8','reg1')
	, ('city9','reg2')
	, ('city10','reg1')
	, ('city11','reg3')
	, ('city12','reg4')
	, ('city13','reg5')
	, ('city14','reg1')
	, ('city15','reg1')
	, ('city15','reg6')
	, ('city16','reg1')
	, ('city17','reg1');

/*old query
insert into cities
values ('c1','reg1','Winterfell')
	, ('c6','reg1','Winterfell')
	, ('c7','reg1','Winterfell')
	, ('c8','reg1','Winterfell')
	, ('c9','reg1','Winterfell')
	, ('c2','reg1','Westerlands')
	, ('c3','reg1','Westerlands')
	, ('c10','reg1','Westerlands')
	, ('c4','reg1','The Stormlands')
	, ('c11','reg1','The Realm')
	, ('c12','reg1','The Stormlands')
	, ('c5','reg1','Dragonstone')
	, ('c13','reg1','Iron Islands')
	, ('c14','reg1','The Wall')
	, ('c15','reg1','Casterly Rock')
	, ('c16','reg1','The Wall')
	, ('c17','reg2','The Crossing')
	, ('c18','reg1','The Reach')
	, ('c19','reg3','Dreadfort')
	, ('c20','reg1','Casterly Rock')
	, ('c21','reg4','Asshai')
	, ('c22','reg5','Dothraki Sea')
	, ('c23','reg1','Lorath')
	, ('c24','reg1','Winterfell')
	, ('c25','reg1','North of the Wall')
	, ('c26','reg6','North of the Wall')
	, ('c27','reg1','King''s Landing')
	, ('c28','reg1','Volantis')
	, ('c29','reg6','North of the Wall');
*/

/* old query
insert into cities
values ('reg1','Winterfell')
	, ('reg1','Winterfell')
	, ('reg1','Winterfell')
	, ('reg1','Winterfell')
	, ('reg1','Winterfell')
	, ('reg1','Westerlands')
	, ('reg1','Westerlands')
	, ('reg1','Westerlands')
	, ('reg1','The Stormlands')
	, ('reg1','The Realm')
	, ('reg1','The Stormlands')
	, ('reg1','Dragonstone')
	, ('reg1','Iron Islands')
	, ('reg1','The Wall')
	, ('reg1','Casterly Rock')
	, ('reg1','The Wall')
	, ('reg2','The Crossing')
	, ('reg1','The Reach')
	, ('reg3','Dreadfort')
	, ('reg1','Casterly Rock')
	, ('reg4','Asshai')
	, ('reg5','Dothraki Sea')
	, ('reg1','Lorath')
	, ('reg1','Winterfell')
	, ('reg1','North of the Wall')
	, ('reg6','North of the Wall')
	, ('reg1','King''s Landing')
	, ('reg1','Volantis')
	, ('reg6','North of the Wall');
*/

insert into chars_in_regions
values ('c1','reg1')
	, ('c6','reg1')
	, ('c7','reg1')
	, ('c8','reg1')
	, ('c9','reg1')
	, ('c2','reg1')
	, ('c3','reg1')
	, ('c10','reg1')
	, ('c4','reg1')
	, ('c11','reg1')
	, ('c12','reg1')
	, ('c5','reg1')
	, ('c13','reg1')
	, ('c14','reg1')
	, ('c15','reg1')
	, ('c16','reg1')
	, ('c17','reg2')
	, ('c18','reg1')
	, ('c19','reg3')
	, ('c20','reg1')
	, ('c21','reg4')
	, ('c22','reg5')
	, ('c23','reg1')
	, ('c24','reg1')
	, ('c25','reg1')
	, ('c26','reg6')
	, ('c27','reg1')
	, ('c28','reg1')
	, ('c29','reg6');

insert into pets
values ('p1','Drogon','dragon','Volcanic Mountains','c5','Carnivore')
	, ('p2','Viserion','dragon','Volcanic Mountains','c5','Carnivore')
	, ('p3','Rhaegal','dragon','Volcanic Mountains','c5','Carnivore')
	, ('p4','Grey Wind','Direwolf','Forests,Mountains','c6','Carnivore')
	, ('p5','Lady','Direwolf','Forests,Mountains','c8','Carnivore')
	, ('p6','Nymeria','Direwolf','Forests,Mountains','c7','Carnivore')
	, ('p7','Summer','Direwolf','Forests,Mountains','c9','Carnivore')
	, ('p8','Ghost','Direwolf','Forests,Mountains','c15','Carnivore')
	, ('p9','The Silver','Dothrak Horse','Plains','c5','Herbivore');

insert into creatures
values ('cr1','Manticore','Jade Sea-Essos','Carnivore',null,null,null,null)
	, ('cr2','Raven','Forests,Plains,Westeros','Omnivore',null,null,'Active',null)
	, ('cr3','Wight','Beyond the Wall,Westeros',null,null,'Glowing Blue Eyes','Active',null)
	, ('cr4','White Walkers','Lands of Always Winter',null,null,'Glowing blue eyes,pale and gaunt','Active',null)
	, ('cr5','Giant','Beyond the Wall,Westeros',null,null,'Twice human height','Active','Clan-based')
	, ('cr6','Children of the Forest','Westeros',null,null,'human child height,4-fingered hands','Active','Clan-based');

insert into creatures_in_region
values ('cr1','reg4')
	, ('cr2','reg1')
	, ('cr3','reg3')
	, ('cr4','reg3')
	, ('cr5','reg3')
	, ('cr6','reg2');

insert into religion
values ('r1','Night''s Watch Vows')
	, ('r2','Seven Pointed Star')
	, ('r3','Drowned God')
	, ('r4','Fiery Heart of the Lord Light')
	, ('r5','Titan of Braavos')
	, ('r6','Good Masters')
	, ('r7','Old Gods of the Forest');

insert into chars_religion
values ('c14','r1')
	, ('c26','r1')
	, ('c21','r4');




--CREATE VIEW QUERIES
--Displays the families each character is associated with
create or replace view characters_in_families
as
select c.fn, c.ln, f.name
from characters c,
     families f
where c.fid = f.fid;

--Displays the names of the characters in relationships
create or replace view relations
as
(
select c1.fn as person1first, c1.ln as person1last, c2.fn as person2first, c2.ln as person2last, married, couple
from characters c1
   , characters c2
   , relationships r
where c1.cid = r.person1
  and c2.cid = r.person2
);

--Displays the pets that characters own
create or replace view owned_pets
as
select c.fn "owner first name", c.ln "owner last name", p.name "pet name", p.type "pet type"
from characters c
   , pets p
where c.cid = p.owner;

--Displays the cities that the characters inhabitated
create or replace view inhabitants_Casterly_Rock
as
select distinct ch.cid, ch.fn, ch.ln, ci.name as "City Name"
from characters ch
   , chars_in_regions ch_reg
   , cities_in_regions ci_reg
   , regions reg
   , cities ci
where ch.cid = ch_reg.cid
  and ch_reg.regid = reg.regid
  and reg.regid = ci_reg.regid
  and ci_reg.cityid = ci.cityid
  and ci.name = 'Casterly Rock';

--Displays the characters in the vicinity of any creatures
create or replace view characters_around_creatures
as
select distinct ch.fn "first name", ch.ln "last name", cr.type "creature type", r.name "region"
from characters ch
   , chars_in_regions ch_r
   , regions r
   , creatures_in_region cr_r
   , creatures cr
where ch.cid = ch_r.cid
  and ch_r.regid = r.regid
  and r.regid = cr_r.regid
  and cr_r.crid = cr.crid
  and r.name = 'Essos';

--Displays the number of inhabitants in each of the domains
create or replace view number_inhabitants
as
select f.domain, count(c.cid) "number of inhabitants"
from characters c
   , families f
where c.fid = f.fid
group by f.domain
order by "number of inhabitants" desc;



--STORED PROCEDURES
--function that takes a character id and returns all information on that character
create or replace function getCharInfo(varchar,refcursor) returns refcursor as
$$
declare
	char_id varchar := $1;
	resultset refcursor := $2;

begin
	open resultset for
		select ch1.fn as "Character FN", ch1.ln as "Character LN", famil.name as "Family Name", famil.sigil "Family Mascot", famil.domain "Family Domain",
			relat.married "Married?", relat.couple "Couple?", ch2.fn "Partner's FN", ch2.ln "Partner's LN"
		from characters ch1
		   , characters ch2
		   , actors act
		   , relationships relat
		   , families famil
		where ch1.cid = act.aid
		  and ch1.fid = famil.fid
		  and ch1.cid = relat.person1
		  and ch2.cid = relat.person2
		  and ch1.cid = char_id;
	return resultset;
end;
$$
language plpgsql;

--trigger to correspond with the above function
create trigger check_characters after insert on characters
for each row execute procedure getCharInfo(varchar,refcursor);

select getCharInfo('c1','results');
fetch all from results;

select getCharInfo('c5','results');
fetch all from results;

select getCharInfo('c10','results');
fetch all from results;

--function that takes as input a city and returns all of the characters from that city
create or replace function getCharsFromCity(varchar,refcursor) returns refcursor as
$$
declare
	city_input varchar := $1;
	resultset refcursor := $2;

begin
	open resultset for
		select distinct ch.fn, ch.ln, cit.name "City Name"
		from 	cities cit
		      , regions reg
		      , chars_in_regions ch_reg
		      , cities_in_regions ci_reg
		      , characters ch
		where ch.cid = ch_reg.cid
		  and ch_reg.regid = reg.regid
		  and reg.regid = ci_reg.regid
		  and ci_reg.cityid = cit.cityid
		  and cit.name = city_input;
	return resultset;
end;
$$
language plpgsql;

--trigger for the above function
create trigger check_cities after update on cities
for each row execute procedure getCharsFromCity(varchar,refcursor);

select getCharsFromCity('The Stormlands','results');
fetch all from results;

select getCharsFromCity('Winterfell','results');
fetch all from results;

select getCharsFromCity('Asshai','results');
fetch all from results;




--SECURITY
create role admin;
grant all privileges
on all tables in schema public
to admin;

drop role viewer;
create role viewer;
grant select
on all tables in schema public
to viewer;

drop role editor;
create role editor;
grant select, insert, update
on all tables in schema public
to editor;
