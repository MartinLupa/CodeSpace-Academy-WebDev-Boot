CREATE DATABASE academy_db; 
USE academy_db;
CREATE TABLE Students(
    students_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    lastnames VARCHAR(40) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
    PRIMARY KEY (students_id)
);

CREATE TABLE Courses (
courses_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
price INT NOT NULL,
duration INT NOT NULL,
time VARCHAR(30) NOT NULL,
difficulty ENUM("Easy", "Medium", "Hard") NOT NULL,
PRIMARY KEY (courses_id)
);

CREATE TABLE Enrollments (
    enrollments_id INT NOT NULL AUTO_INCREMENT,
    students_id INT UNSIGNED NOT NULL,
    courses_id INT UNSIGNED NOT NULL,
    year YEAR NOT NULL,
    FOREIGN KEY (students_id) REFERENCES Students(students_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (courses_id) REFERENCES Courses(courses_id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (enrollments_id)  
);

INSERT INTO Students(name, lastnames, phone, email, birth_date) VALUES ("Martin", "Lupa Groppelli", 123123123, "email@email.com", "1989-09-19");
INSERT INTO Courses(name, price, duration, time, difficulty) VALUES ("React, from 0 to Hero", 4280, 160, "Mon to Fri, 9am to 2pm", "Hard");
