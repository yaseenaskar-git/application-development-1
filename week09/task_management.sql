CREATE DATABASE task_management_db;

USE task_management_db;

-- Table: users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Table: projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table: tasks
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Insert Users
INSERT INTO users (name, email) VALUES
('Jack James', 'jack@example.com'),
('Mathew Allister', 'mathew@example.com'),
('John Smith', 'john@example.com');

-- Insert Projects
INSERT INTO projects (name, description, user_id) VALUES
('Fitness App', 'Track workouts and progress', 1),
('E-commerce Website', 'Online store project', 2),
('Task Manager', 'Manage daily tasks', 3);

-- Insert Tasks
INSERT INTO tasks (title, status, project_id) VALUES
('Design UI', 'In Progress', 1),
('Build backend', 'Not Started', 1),
('Setup database', 'Completed', 2),
('Create homepage', 'In Progress', 2),
('Write documentation', 'Not Started', 3);

SELECT * FROM users;

SELECT * FROM peojects;

SELECT * FROM tasks;

SELECT 
    tasks.title,
    tasks.status,
    projects.name AS project_name
FROM tasks
JOIN projects 
    ON tasks.project_id = projects.id;

SELECT 
    projects.name AS project_name,
    users.name AS user_name
FROM projects
JOIN users 
    ON projects.user_id = users.id;

SELECT * 
FROM tasks
WHERE status = 'Completed';

SELECT * 
FROM tasks
ORDER BY title ASC;