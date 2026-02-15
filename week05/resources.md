# Defining Resources 

### Users 
Endpoint: /users/{userId}
Relationship: /users/{userId}/orders

### Orders 
Endpoint: /orders/{orderId}
Relationship: /orders/{orderId}/packages

### Packages 
Endpoint: /packages/{packageId}
Relationship: /packages/{packageId}/orders