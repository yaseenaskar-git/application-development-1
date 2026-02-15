# Endpoints example requests and responses

### POST
Request: 
POST /packages
Content-Type: application/json
Accept: application/json

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

### PATCH
Request:
PATCH /orders/{orderId}
Content-Type: application/json
Accept: application/json 

{
    "status":"completed"
}

Response:
HTTP/1.1 204 No Content

### DELETE
Request:
DELETE /packages/{packageId} 
Accept: application/json 

Response:
HTTP/1.1 204 No Content