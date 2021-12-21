CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE customers(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL, 
    phone_number VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    birthdate DATE DEFAULT "2000-01-01"
);

CREATE TABLE logins(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT UNSIGNED NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

CREATE TABLE brands(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);

CREATE TABLE products (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     brand_id INT UNSIGNED,
     model VARCHAR(100) NOT NULL, 
     country VARCHAR(100) NOT NULL,
     price INT(50) NOT NULL,
     stock INT(50) NOT NULL,
     FOREIGN KEY(brand_id) REFERENCES brands(id) 
);

CREATE TABLE orders(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(product_id) REFERENCES products(id), 
    order_date VARCHAR(100) NOT NULL
);

CREATE TABLE cart_items(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_id INT UNSIGNED NOT NULL, 
    product_id INT UNSIGNED NOT NULL,
    quantity INT(50),
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(product_id) REFERENCES products(id) 
);

INSERT INTO customers(first_name, last_name, phone_number, email, address, birthdate) VALUES ("Martin", "Lupa", "123123123", "email@email.com", "Armengual de la Mota 41", "1989-09-19");
INSERT INTO logins(customer_id, email, password) VALUES (1, "email@email.com", "12341234");
INSERT INTO brands(name, country) VALUES ("Las Colonias", "Argentina");
INSERT INTO products(brand_id, model, country, price, stock) VALUES (1, "Dulce de Leche - Colonial", "Argentina", 12.30, 1500);
INSERT INTO orders(customer_id, product_id, order_date) VALUES (1, 1, NOW());
INSERT INTO cart_items(customer_id, product_id, quantity) VALUES (1, 1, 10);