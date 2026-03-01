## Week 07 Lifecycle Document

### Valid POST request to /packages with correct API key.
Execution order:
1- Logger middleware
2- Timer middleware (records start time)
3- API middleware
4- Validate middleware 
5- Controller middleware
6- Timer middleware (records end time)

When a valid post request is made with the correct API key to packages, the middleware that runs is next() from the validate middleware. 

After the package has been validated, the response will be sent, and the controller will execute because the package is valid.

### POST /packages without required field.
Execution order:
1- Logger middleware
2- Timer middleware (records start time)
3- API middleware
4- Validate middleware 
5- Timer middleware (records end time)

When a post with missing required fields is sent, validate middleware will run again but this time returning an error message as required fields are missing. 

The error message response is directly sent and the controller will not execute because the package is not valid.

### POST /packages with missing API key.
Execution order:
1- Logger middleware
2- Timer middleware (records start time)
3- API middleware
4- Timer middleware (records end time)

When a package is missing the API key in the post request, the API middleware will run. 

It will respond directly with the appropriate error message and the controller will not run because the package API key is missing.