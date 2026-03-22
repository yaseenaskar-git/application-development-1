# Week 9 Results

### What my database represents
My database represents a task management system, allowing different individuals to keep up with the tasks they have to perform regarding a certain project they are assigned to.

### List of tables
1- Users 
2- Projects
3- Tasks

### Table relationships

#### Projects table and Users table
Firstly, the user_id of the Users table is connected to the projects table to allow users to connect with the projects they are assigned. Therefore, user_id is a foreign key in the projects table.

#### Tasks table and Projects table
Secondly, the project_id of the projects table is connected to the tasks table to allow the connection between projects and tasks to be completed for that project. Therefore, project_id is a foreign key in the tasks table.

### What is a primary key?

A primary key is a data column in a table that uniquely identifies every set of data (row) in that table.

### What is a foreign key?

A foreign key is a data column from another table (in most cases the primary key of another table) used in the table at hand to create a connection (relationship) between both tables.