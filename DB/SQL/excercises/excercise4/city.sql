CREATE DATABASE cities;
USE cities;

CREATE TABLE city (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(17) NOT NULL, 
    countrycode CHAR(3) NOT NULL, 
    district CHAR(20) NOT NULL, 
    population INT UNSIGNED NOT NULL
);

INSERT INTO city(id,name,countrycode,district,population) VALUES (6,'Rotterdam','NLD','Zuid-Holland',593321);
INSERT INTO city(id,name,countrycode,district,population) VALUES (3878,'Scottsdale','USA','Arizona',202705);
INSERT INTO city(id,name,countrycode,district,population) VALUES (3965,'Corona','USA','California',124966);
INSERT INTO city(id,name,countrycode,district,population) VALUES (3973,'Concord','USA','California',121780);
INSERT INTO city(id,name,countrycode,district,population) VALUES (3977,'Cedar Rapids','USA','Iowa',120758);
INSERT INTO city(id,name,countrycode,district,population) VALUES (3982,'Coral Springs','USA','Florida',117549);
INSERT INTO city(id,name,countrycode,district,population) VALUES (4054,'Fairfield','USA','California',92256);
INSERT INTO city(id,name,countrycode,district,population) VALUES (4058,'Boulder','USA','Colorado',91238);
INSERT INTO city(id,name,countrycode,district,population) VALUES (4061,'Fall River','USA','Massachusetts',90555);


--QUERIES:
SELECT * FROM city WHERE population > 100000 AND countrycode = "USA";
SELECT name FROM city WHERE population > 120000 AND countrycode = "USA";
SELECT * FROM city;
SELECT * FROM city WHERE id = 1661;
SELECT * FROM city WHERE countrycode = "JPN";
SELECT name FROM city WHERE population = (SELECT MAX(population) FROM city);
DELETE FROM city WHERE countrycode NOT LIKE "USA";
UPDATE city SET name = "Hiroshima", countrycode = "JPN", district = "Hokkaido", population = 150000 WHERE id = 4061; 




