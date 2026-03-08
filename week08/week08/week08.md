# Packages API – Simple E-Commerce

## 1. Project Overview

The Packages API is part of a simple e-commerce system for personal training packages.  

### What the API does:  
Allows users to view, create, update, and delete personal training packages. Noting that not all users but only coaches have this privilege.

### Target users: 
This specific API is tareted towards coaches who want to create different service packages.

### Core resources:  
Packages: Personal training packages with name and price
Orders: User orders associated with packages 
Users: Clients of the e-commerce system 

## 2. Setup Instructions

**Node version:** v22.x recommended
**Install dependencies:**  
bash
npm install

bash
npm star

## 3. API Overview

Method	Endpoint	Description
GET	/packages	Retrieve all packages
GET	/packages/:id	Retrieve a single package
POST	/packages	Create a new package 
PATCH	/packages/:id	Update a package 
DELETE	/packages/:id	Delete a package

Note: POST, PATCH, DELETE require header: x-api-key: 12345

## 4. Example Requests

### 1. Successful POST

Request:

POST /packages
Content-Type: application/json
Accept: application/json
x-api-key: 12345

{
    "name": "Package 1",
    "price": 100
}

Response:

HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": 1,
    "name": "Package 1",
    "price": 100
}

### 2. Validation Error (missing required field)

Request:

POST /packages
Content-Type: application/json
Accept: application/json
x-api-key: 12345

{
    "name": ""
}

Response:

HTTP/1.1 400 Bad Request
Content-Type: application/json

{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Name and price are required"
    }
}

### 3. 401 Unauthorized (missing or incorrect API key)

Request:

POST /packages
Content-Type: application/json
Accept: application/json

Response:

HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
    "error": {
        "code": "UNAUTHORIZED",
        "message": "API key missing or invalid"
    }
}