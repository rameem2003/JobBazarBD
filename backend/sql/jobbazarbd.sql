CREATE DATABASE jobbazarbd;
USE jobbazarbd;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role ENUM('user', 'job_provider'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    jobRole varchar(255),
    description TEXT,
    minSalary int,
    maxSalary int,
    jobType varchar(255),
    companyName VARCHAR(255),
    city varchar(255),
    country varchar(255),
    jobProviderID INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (jobProviderID) REFERENCES users(id) ON DELETE CASCADE
);