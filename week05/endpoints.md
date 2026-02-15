# Endpoints Design 

### Users 

GET 
/users 
Returns a collection of users 
200 OK: success wit body

GET 
/users/{userId} 
Returns a single user 
200 OK: success wit body

### Orders 

PATCH 
/orders/{orderId} 
Updates an existing order 
200 OK: success wit body

### Packages

POST 
/packages 
Creates a package 
201 Created: new package created

DELETE 
/packages/{packageId} 
Removes a package 
204 No Content: success without body