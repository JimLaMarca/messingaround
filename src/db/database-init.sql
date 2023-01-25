CREATE DATABASE messingaround;

CREATE TYPE gender AS ENUM ('male', 'female', 'other');

CREATE TABLE IF NOT EXISTS users (
    id             serial primary key,
    user_name      varchar(100),
    age            INT,
    favorite_color varchar(30),
    occupation     varchar(50),
    gender         gender
);
