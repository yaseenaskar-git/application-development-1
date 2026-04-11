# Week 12 Reflection

## What is the difference between authentication and authorization?

Authentication is the process of verifying who a user is, usually by checking their email and password during login. Authorization happens after authentication and determines what the user is allowed to do, such as accessing certain routes or data based on their role or permissions.

## Why does /admin return 403 for a regular user instead of 401?

Authentication is knowing who is accessing the application, and authorization is determining what rights and privileges the person who has accessed the application has.

## Why is ownership checking important?

Ownership checking makes sure users that only work with data they own rather than having access to the data of all other users.

## What is the difference between role-based access and ownership-based access?

Role-based access is privileges based on a user’s role, like admin or regular user, and determines what actions they can perform. Ownership-based access depends on the data a user owns, like a task, regardless of their role. 

## Why should authorization checks happen on the server instead of the client?

Authorization checks must happen on the server because there is more control there as opposed to the client side which is uncontrolled and can be manipulated by the client.
