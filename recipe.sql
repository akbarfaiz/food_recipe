--USERS
CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    name VARCHAR,
    photo VARCHAR,
    valid INT DEFAULT 0,
    OTP VARCHAR,
    created_at TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    role VARCHAR NOT NULL
);

SELECT * FROM users;

INSERT INTO users(name) VALUES('Bambang');

UPDATE users SET name = 'Akbar' WHERE email = 'akbar@mail.com';

UPDATE users SET role = 'User';

DELETE FROM users WHERE name = 'Yjy';

ALTER TABLE users ALTER COLUMN role VARCHAR NOT NULL;

ALTER TABLE users RENAME COLUMN verif TO valid;

DROP TABLE users;

--RECIPE
CREATE TABLE recipe(
    id SERIAL PRIMARY KEY, 
    name VARCHAR,
    ingredient TEXT,
    photo VARCHAR,
    created_at TIMESTAMP NOT NULL,
    users_id VARCHAR REFERENCES users(id),
    category_id INT REFERENCES category(id),
    deleted_at TIMESTAMP DEFAULT NULL
);

SELECT * FROM recipe;

SELECT * FROM recipe where deleted_at IS NOT NULL;

SELECT * FROM recipe where deleted_at IS NULL;

SELECT * FROM recipe ORDER BY created_at DESC OFFSET 1 LIMIT 10;

UPDATE recipe SET users_id = '0b8dbf35-f98d-419f-bc71-05418e34dde7' WHERE id = 6;

ALTER TABLE recipe add deleted_at TIMESTAMP DEFAULT NULL;

ALTER TABLE recipe DROP COLUMN users_id;

ALTER TABLE recipe add users_id VARCHAR;

ALTER TABLE recipe add Foreign Key (users_id) REFERENCES users(id);

--CATEGORY
CREATE TABLE category(
    id SERIAL PRIMARY KEY, 
    name VARCHAR,
    deleted_at TIMESTAMP DEFAULT NULL
);

SELECT * FROM category;

INSERT INTO category(name) VALUES('Main Dish');

UPDATE category SET name = 'Dessert' WHERE id = 1;

ALTER TABLE category add deleted_at TIMESTAMP DEFAULT NULL;

DELETE FROM category WHERE name = 'undefined';