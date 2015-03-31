/*
  CHRIS OGNIBENE
  PROFESSOR LABOUSEUR
  CMPT 308L - 111

  LAB 10 - STORED PROCEDURES
*/


--SELECT STATEMENTS
select * from courses;
select * from prerequisites;

--function PreReqsFor(courseNum) - Returns the immediate prerequisites for the passed-in course number.
create or replace function PreReqsFor(int, refcursor) returns refcursor as
$$
declare 
	course_num int := $1; --$1 is a placeholder for the first parameter passed in
	resultset refcursor := $2;

begin
	open resultset for
		select c.name, c.num, c.credits
		from courses c,
		     prerequisites p
		where course_num in (p.coursenum)
		  and p.prereqnum = c.num;
	return resultset;
end;
$$
language plpgsql;

--TEST QUERIES FOR FUNCTION 1 (ABOVE)
select PreReqsFor(499, 'results');
Fetch all from results;

select PreReqsFor(308, 'results');
Fetch all from results;

select PreReqsFor(221, 'results');
Fetch all from results;

select PreReqsFor(220, 'results');
Fetch all from results;

select PreReqsFor(120, 'results'); --no prerequisite courses since it is the first one taken
Fetch all from results; --results is the name of the "variable" that stores the actual returned 'resultset'.  Then we use 'Fetch' to display what is in 'results'.


--function IsPreReqFor(courseNum) - Returns the courses for which the passed-in course number is a immediate pre-requisite.
create or replace function IsPreReqFor(int, refcursor) returns refcursor as
$$
declare
	course_num int := $1;
	resultset refcursor := $2;

begin
	open resultset for
		select c2.name, c2.num, c2.credits
		from courses c1,
		     courses c2,
		     prerequisites p1
		where course_num = c1.num
		  and c1.num = p1.prereqnum
		  and p1.coursenum = c2.num;
	return resultset;
end;
$$
language plpgsql;

--TEST QUERIES FOR FUNCTION 2
select IsPreReqFor(308, 'results');
Fetch all from results;

select IsPreReqFor(221, 'results');
Fetch all from results;

select IsPreReqFor(220, 'results');
Fetch all from results;

select IsPreReqFor(120, 'results');
Fetch all from results;

select IsPreReqFor(499, 'results'); --there should be an empty relation, because Capping is not a prerequisite for anything (last course in sequence)
Fetch all from results;


/*
--Jedi function:  Optional Challenge:
	--Demonstrate Jedi-level skills and write a third, recursive, function that takes a passed-in course number and generates all of its prerequisites. Uses the first two functions
	--you wrote and recursion.

--'forward' and 'fetch next'

create or replace function ultimate(int, refcursor) returns refcursor as
$$
declare
	course_num int := $1;
	resultset refcursor := $2;

begin
	open resultset for
----------------------------------------------------
--FUNCTION 1

create or replace function PreReqsFor(int, refcursor) returns refcursor as
$$
declare 
	course_num int := $1; --is there any reason why we chose these assignment values?
	resultset1 refcursor := $2;

begin
	open resultset1 for
		select c.name, c.num, c.credits
		from courses c,
		     prerequisites p
		where course_num in (p.coursenum)
		  and p.prereqnum = c.num;
	return resultset1;
end;
$$
language plpgsql;
----------------------------------------------------
--FUNCTION 2

create or replace function IsPreReqFor(int, refcursor) returns refcursor as
$$
declare
	course_num int := $1;
	resultset2 refcursor := $2;

begin
	open resultset for
		select c2.name, c2.num, c2.credits
		from courses c1,
		     courses c2,
		     prerequisites p1
		where course_num = c1.num
		  and c1.num = p1.prereqnum
		  and p1.coursenum = c2.num;
	return resultset2;
end;
$$
language plpgsql;
-----------------------------------------------------
	return resultset;
	
end;
$$
language plpgsql;
*/