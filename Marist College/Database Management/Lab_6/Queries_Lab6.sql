-- Chris Ognibene
-- Professor Labouseur
-- 26 February 2014
-- CMPT 308L - 111

-- Lab 6:  SQL Queries, Really Interesting Queries

-- Revision History
	-- Fourth Revision:  26 February 2014
	-- Third Revision:  25 February 2014
	-- Second Revision: 23 February 2014
	-- First Revision:  21 February 2014
	-- Original Version:  20 February 2014


-- Query 1: Get the name and city of customers who live in a city where the most number of products are made.

select c.name, p.city, sum(p.quantity)
from products p, customers c
where p.city = c.city
group by p.city, c.name
order by sum(p.quantity) desc
limit 2;

--OR (WHICHEVER QUERY YOU PREFER: BOTH RETURN THE SAME RESULT) -- this is the query for question 2
select c.name, c.city, sub1.total
from customers c, 
	(
	select city, sum(quantity) as total
	from products
	where city in
		(
		select city
		from customers
		)
	group by city
	order by total desc
	limit 1
	) sub1
where sub1.city = c.city;


--second attempt (SCRAP QUERY)
select city, sum(quantity) as total
from products
group by city
order by total desc
limit 1;

--We had discussed this interpretation that you possessed; determining the maximum number of products based on the occurrences of cities
--This gives the same result as my initial queries
select c.name, c.city, sub1.countCity
from customers c, 
	(
	select city, count(city) as countCity
	from products 
	group by city
	order by countCity desc
	limit 1
	) sub1
where sub1.city = c.city;


--Query 2:  Get the name and city of customers who live in any city where the most number of products are made.  

select c.name, c.city, total
from customers c, 
	(
	select city, sum(quantity) as total
	from products p
	where p.city in
		(
		select city
		from customers
		)
	group by city
	order by total desc
	limit 1
	
	) sub1
where c.city = sub1.city;

	
--Query 3:  List the products whose priceUSD is above the average priceUSD.

select *
from products
where priceUSD >
	(
	select avg(priceUSD)
	from products
	);


--Query 4:  Show the customer name, pid ordered, and the dollars for all customer orders, sorted by dollars from high to low. 

select distinct c.name, o.pid, o.dollars
from customers c, orders o
where c.cid = o.cid
order by o.dollars desc;


--Query 5:  Show all customer names (in order) and their total ordered, and nothing more.  Use coalesce to avoid showing nulls.

	--w3schools.com:  http://www.w3schools.com/sql/sql_isnull.asp
		--information about coalesce

select name, coalesce(total,0)
from customers c
right outer join 
	(
	select o.cid, sum(o.dollars) as total
	from orders o
	group by o.cid
	) sub1
on sub1.cid = c.cid
order by c.name asc;


--Query 6:  Show the names of all customers who bought products from agents based in New York along with the names of the products they ordered, 
	--and the names of the agents who sold it to them.

select c.name, a.name, p.name
from customers c, orders o, agents a, products p
where a.city = 'New York'
  and a.aid = o.aid
  and o.pid = p.pid
  and o.cid = c.cid;
 

--Query 7:  Write a query to check the accuracy of the dollars column in the Orders table.  This means calculating Orders.dollars from other data in other tables and then
	--comparing those values to the values in Orders.dollars.

--to compare the two columns, the 'except' (difference) operator is used.  Any columns returned indicates that there are values in the original orders
--table that are not in the calculated orders column (my version of the equality operator).

select dollars
from orders

except

select (o.qty * p.priceUSD) - (c.discount/100 * o.qty * p.priceUSD) as checksum
from customers c, orders o, products p
where c.cid = o.cid
  and o.pid = p.pid;

--If an empty relation is returned, that indicates the two sets are exactly the same.  Since the the dollar entry, 740, is returned, this is incorrect in the original table.
--I recalculated manually from the table and obtained the correct value of 704.  
