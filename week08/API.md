# Packages API Documentation

This document describes all endpoints for the Packages resource in the simple e-commerce system.

## Resource 1: Users

### Overview
The Users resource manages clients of the e-commerce system.

### Core fields:

id (integer) – unique identifier  

name (string) – user’s name  

email (string) – user’s email  

### 1. GET /users

#### Description: Retrieve a list of all users. Supports pagination.

#### Request: No body required

#### Success Response:

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1
  }
}
```

#### Possible Errors: None (GET requests are public)

### 2. GET /users/:id

#### Description: Retrieve a single user by ID

#### Request: No body required

#### Success Response:

HTTP/1.1 200 OK
Content-Type: application/json

```{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Possible Errors:

404 Not Found

```{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found"
  }
}
```

### 3. POST /users

#### Description: Create a new user (requires API key)

#### Headers:

x-api-key: 12345

#### Content-Type: application/json

Accept: application/json

#### Request Body:

```{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

#### Success Response:

HTTP/1.1 201 Created
Content-Type: application/json

```{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

#### Possible Errors:

400 Validation Error (missing required fields)

401 Unauthorized (API key missing/invalid)

409 Conflict (email already exists)

### 4. PATCH /users/:id

#### Description: Update a user partially (protected)

#### Request Body Example:

```{
  "name": "Jane Smith"
}
```

#### Success Response:

HTTP/1.1 200 OK
Content-Type: application/json

```{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

#### Possible Errors: 

400, 401, and 404

### 5. DELETE /users/:id

#### Description: Delete a user (protected)

#### Success Response:

HTTP/1.1 204 No Content

#### Possible Errors: 

401 and 404

## Resource 2: Orders

Overview

The Orders resource manages purchases made by users.

### Core fields:

id (integer) – unique identifier

userId (integer) – reference to user

packages (array) – list of package IDs

status (string) – e.g., "pending", "completed"

### 1. GET /orders

#### Description: Retrieve all orders. Supports pagination.

#### Query Parameters (optional):

page – Page number (default: 1)

limit – Items per page (default: 10)

#### Request: No body required

#### Success Response:

HTTP/1.1 200 OK
Content-Type: application/json

```{
  "data": [
    {
      "id": 1,
      "userId": 1,
      "packages": [1, 2],
      "status": "pending"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1
  }
}
```

### 2. GET /orders/:id

#### Description: Retrieve a single order by ID

#### Success Response:

HTTP/1.1 200 OK
Content-Type: application/json

```{
  "id": 1,
  "userId": 1,
  "packages": [1, 2],
  "status": "pending"
}
```

#### Possible Errors: 

404 Not Found

### 3. POST /orders

#### Description: Create a new order (protected)

#### Headers:

x-api-key: 12345

#### Content-Type: application/json

Accept: application/json

#### Request Body:

```{
  "userId": 1,
  "packages": [1],
  "status": "pending"
}
```

#### Success Response:

HTTP/1.1 201 Created
Content-Type: application/json

```{
  "id": 2,
  "userId": 1,
  "packages": [1],
  "status": "pending"
}
```

#### Possible Errors: 

400, 401, and 409 (duplicate order or invalid state)

### 4. PATCH /orders/:id

#### Description: Update an order partially (protected)

#### Request Body Example:

```{
  "status": "completed"
}
```

#### Success Response:

HTTP/1.1 200 OK
Content-Type: application/json

```{
  "id": 1,
  "userId": 1,
  "packages": [1,2],
  "status": "completed"
}
```

#### Possible Errors:

400, 401, 404, and 409

### 5. DELETE /orders/:id

#### Description: Delete an order (protected)

#### Success Response:

HTTP/1.1 204 No Content

Possible Errors: 

401 and 404
