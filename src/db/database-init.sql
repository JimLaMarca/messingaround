CREATE TYPE gender AS ENUM ('male', 'female', 'other');

CREATE TABLE IF NOT EXISTS users (
    id             serial primary key,
    user_name      varchar(100),
    age            INT,
    favorite_color varchar(30),
    occupation     varchar(50),
    gender         gender
);

INSERT INTO users (user_name, age, favorite_color, occupation, gender)
VALUES ('Jim LaMarca', 33, 'Red', 'Software Engineer', 'male'),
       ('Dani LaMarca', 31, 'Teal', 'Product Owner', 'female'),
       ('Declan LaMarca', 3, 'Green', 'Mac & Cheese Eater', 'male'),
       ('Keeva LaMarca', 1, 'Purple', 'Professional Slider', 'female'),
       ('Islay LaMarca', 7, 'Fire', 'Destroyer of Worlds', 'female'),
       ('Mike LaMarca', 63, 'Blue', 'Mechanical Engineer', 'male');