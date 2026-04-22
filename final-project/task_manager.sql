CREATE DATABASE task_manager;

USE task_manager;

--Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

--Category Table
CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

--Tasks Table 
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    due_date DATE,
    status VARCHAR(50) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

--Sample data
INSERT INTO users (name, email, role, password_hash) VALUES
('Aisha Khan', 'aisha.backend@example.com', 'Back-end developer', 'hashed_password_1'),
('Liam Parker', 'liam.frontend@example.com', 'Front-end developer', 'hashed_password_2'),
('Sophia Reyes', 'sophia.engineer@example.com', 'Software Engineer', 'hashed_password_3'),
('Noah Carter', 'noah.cyber@example.com', 'Cybersecurity specialist', 'hashed_password_4');

INSERT INTO category (name) VALUES
('Back-end development'),
('Front-end development'),
('Testing'),
('Cloud Launching');

INSERT INTO tasks (user_id, category_id, name, due_date, status) VALUES
(1, 1, 'Build authentication API', '2026-05-10', 'in_progress'),
(1, 1, 'Optimize database queries', '2026-05-15', 'pending'),

(2, 2, 'Create dashboard UI', '2026-05-12', 'in_progress'),
(2, 2, 'Fix responsive layout issues', '2026-05-08', 'completed'),

(3, 3, 'Oversee system integration testing', '2026-05-20', 'pending'),
(3, 4, 'Prepare cloud deployment plan', '2026-05-18', 'in_progress'),

(4, 3, 'Perform security audit', '2026-05-25', 'pending'),
(4, 4, 'Configure firewall rules for cloud launch', '2026-05-22', 'in_progress');