-- Chris Ognibene (with verification from Kevin Clark, and assistance from Michael Mucci)
-- Professor Labouseur
-- 20 February 2014
-- CMPT 308L - 111


-- Lab 5:  SQL Queries, The Three-quel

-- Revision History
	-- Second Revision: 20 February 2014
	-- First Revision:  19 February 2014
	-- Original Version:  14 February 2014

-- Query 1:  Get the cities of agents booking an order for customer "Basics".  This time use joins, not subqueries.

select a.city
from agents a, customers c, orders o
where c.cid = o.cid
  and o.aid = a.aid
  and c.name = 'Basics'
order by a.city asc;

-- Query 2:  Get the pids of products ordered through any agent who makes at least one order for a customer in Kyoto (use joins).  
	--verification from Kevin Clark, and Michael Mucci

select distinct o2.pid
from customers c
inner join orders as o1
on c.cid = o1.cid
right join orders as o2
on o1.aid = o2.aid
where c.city = 'Kyoto'
order by o2.pid asc;

-- Query 3:  Get the names of customers who have never placed an order.  Use a subquery.

select name
from customers
where cid not in
	(
	select cid
	from orders
	)
order by name asc;

-- Query 4:  Get the names of customers who have never placed an order.  Use an Outer Join.  

	--utilized w3schools.com for this question

select name
from customers
FULL OUTER JOIN orders
ON customers.cid = orders.cid
where customers.cid not in
	(
	select cid
	from orders
	);
	
--Query 5:  Get the names of customers who placed at least one order through an agent in their city, along with those agent(s') names.  

select distinct c.name as "customer name", a.name as "agent name", c.city
from agents a, customers c, orders o
where c.cid = o.cid
  and o.aid = a.aid
  and c.city = a.city
order by c.name, a.name, c.city asc;

-- Query 6:  Get the names of customers and agents in the same city, along with the name of the city, regardless of whether or not the customer has ever placed and order with that agent.  

select distinct c.name as "customer name", a.name as "agent name", c.city
from customers c, agents a
where c.city = a.city
order by c.name, a.name, c.city asc;

--Query 7:  Get the name and city of customers who live in the city there the least number of products are made.  
	--using figure 6.11 page 275
	--and Michael Mucci's assistance

select name, city
from customers
where city in
	(
	select city
	from
		(
		select p.city, sum(p.quantity) as total
		from products p
		group by p.city
		) total_sum2
	where total in
		(
		select min(total)
		from 
			(			
			select p.city, sum(p.quantity) as total
			from products p
			group by p.city
			) total_sum
		)
	)
order by name asc;