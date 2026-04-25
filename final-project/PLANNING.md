# Project Planning Document
this document will include the planning and thought process of the Task Manager backend.

# Week 1

### Project idea
task manager to keep it simple and understand and master basics of application development. This will be the vision throughout the project

### My API's

Users
get, post, delete, patch

Tasks
get, post, delete, patch

Categories
get, post, delete, patch

These API's will have the CRUD functionality

### Database Schema

Table 1: User
(PK) ID
Name
Email
Role
Password

Table 2: Category
(PK) ID
(FK) user_ID
Name

Table 3: Task
(PK) ID
(FK) user_ID
(FK) Category_ID
Name 
Due date 
Status
Updated_at

### Basic Express server 

npm initialized and express installed into project file

1) npm init -y
2) npm express install

# Week 2

### Database integration
The first thing I am doing in week 2 was creating the database. To fill in some of the fields, I need to create a scenario to know what types of tasks and role I am going to create. So my scenario is a task manager for a group of developers.

The roles will be:
- Back-end developer
- Front-end developer
- Software Engineer (the boss)
- Cybersecurity specialist

Some task categories will be:
- Back-end development 
- Front-end development 
- Testing 
- Cloud Launching 

One fix I implemented is to remove user_id foreign key from the category table because it was not necessary.

The core of the database is complete with some sample data. only the hashed passwords remain. These will be filled in once the hashing method is in place in the backend. For this, I went ahead and installed bcrypt:
- npm install bcrypt
the original password is: password123

### CRUD endpoints

With the help of AI, I completed routes and controllers for tasks (my main resource). 

### Authentication

My user authentication is in middleware/users-mid.js