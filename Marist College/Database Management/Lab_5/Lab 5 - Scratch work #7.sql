

--Incorrect:  Original
select name, city
from customers
where city in
	(
	select city
	from products
	where quantity in
		(
			select min(quantity)
			from products
			where quantity in
			(			
			select city, sum(quantity)
			from products
			group by city
			)
			
		)
		)
	);

--Correct too:


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
		) sum_aggregate2
	where total in
			(
			select min(total)
			from 
				(
				select p.city, sum(p.quantity) as total
				from products p
				group by p.city
				) sum_aggregate
			)
	)
order by name asc;