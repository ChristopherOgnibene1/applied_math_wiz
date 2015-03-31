-- Chris Ognibene (Collaboration from Kara)
-- 12 February 2013
-- CMPT 308L - 111
-- Professor Labouseur

-- Lab 4:  SQL Queries, The Sequel

--Revision history
	--Final Revision - 12 February 2014
	--First revision - 11 February 2014
	--First Draft - 7 February 2014


-- Query 1:  Get the cities of agents booking an order for customer "Basics"

select city
from agents
where  aid in 
	(
	select aid
	from orders
	where cid in
		(
		select cid
		from customers
		where name = 'Basics'
		)
	)
order by city asc;


-- Query 2:  Get the pids of products ordered through any agent who makes at least one order for a customer in Kyoto.  

select distinct pid
from orders
where aid in
	(
	select aid
	from orders
	where cid in
		(
		select cid
		from customers
		where city = 'Kyoto'
		)
	)
order by pid asc;


-- Query 3:  Find the cids and names of customers who never placed an order through agent a03.

select cid, name
from customers
where cid in
	(
	select cid
	from orders
	where aid <> 'a03'
	);


-- Query 4:  Get the cids and names of customers who ordered both product p01 and p07. 


select distinct cid, name
from customers
where cid in
	(
	select cid
	from orders
	where pid = 'p01'
	  and cid in
		(
		select cid
		from orders
		where pid = 'p07'
		)
	)
order by cid asc;


-- Query 5:  Get the pids of products ordered by any customers who ever placed an order through agent a03. 

select distinct pid
from orders
where cid in 
	(
	select cid
	from orders
	where aid = 'a03'
	)
order by pid asc;


-- Query 6:  Get the names and discounts of all customers who place orders through agents in Dallas or Duluth.  

select name, discount
from customers
where cid in
	(
	select cid
	from orders
	where aid in
		(
		select aid
		from agents
		where city = 'Dallas'
		   or city = 'Duluth'
		)
	)
order by discount desc;


-- Query 7:  Find all customers who have the same discount as that of any customers in Dallas or Kyoto.

select cid, name, discount
from customers
where discount in 
		(
		select discount
		from customers
		where city = 'Dallas'
		   or city = 'Kyoto'
		)
order by cid asc;
