--USERS
CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR
    deleted_at TIMESTAMP DEFAULT NULL
);

SELECT * FROM users;

INSERT INTO users(name) VALUES('Bambang');

UPDATE users SET name = 'Akbar' WHERE id = 1;

DELETE FROM users WHERE name = 'undefined';

ALTER TABLE users add deleted_at TIMESTAMP DEFAULT NULL;

--RECIPE
CREATE TABLE recipe(
    id SERIAL PRIMARY KEY, 
    name VARCHAR,
    ingredient TEXT,
    photo VARCHAR,
    created_at TIMESTAMP NOT NULL,
    users_id INT REFERENCES users(id),
    category_id INT REFERENCES category(id),
    deleted_at TIMESTAMP DEFAULT NULL
);

SELECT * FROM recipe;

SELECT * FROM recipe where deleted_at IS NOT NULL;

SELECT * FROM recipe where deleted_at IS NULL;

SELECT * FROM recipe ORDER BY created_at DESC OFFSET 1 LIMIT 10;

ALTER TABLE recipe add deleted_at TIMESTAMP DEFAULT NULL;

--CATEGORY
CREATE TABLE category(
    id SERIAL PRIMARY KEY, 
    name VARCHAR
);

SELECT * FROM category;

INSERT INTO category(name) VALUES('Main Dish');

UPDATE category SET name = 'Dessert' WHERE id = 1;

ALTER TABLE category add deleted_at TIMESTAMP DEFAULT NULL;

DELETE FROM category WHERE name = 'undefined';