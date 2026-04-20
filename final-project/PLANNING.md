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

