# Design rationale

### Why were the following resources chosen?
Users, products, and orders were chosen as the main resources because I think that they form the base for the e-commerce domain.

### Why was PATCH used rather than PUT?
I selected PATCH rather than PUT because it makes sense for the information of the orders of the users to be updated as they change their mind on the packages they want. Moreover, I used PATCH rather than PUT to update objects rather than having users send new ones.

### How does the API avoid breaking clients?
To maintain API stability, I used consistent URLs and naming conventions and made choices like PATCH over PUT to make the API process easier.

### PATCH over PUT tradeoff
As discussed, one advantage of PATCH is having users edit fields they want to change rather than entire objects. On the other hand, the PUT method is easier to validate and PATCH may cause difficulties in regards to being harder to validate.

