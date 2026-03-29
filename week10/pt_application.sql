CREATE DATABASE pt_application;
USE pt_application;

-- TABLE: packages
CREATE TABLE packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: orders
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  package_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (package_id) REFERENCES packages(id)
  ON DELETE SET NULL
);

-- SAMPLE DATA
INSERT INTO packages (name, price, description)
VALUES 
('Basic Package', 19.99, 'Starter plan'),
('Pro Package', 49.99, 'Advanced features');

INSERT INTO orders (product, quantity, status, package_id)
VALUES
('Basic Package', 1, 'pending', 1),
('Pro Package', 1, 'completed', 2);