## Week 07 Order Experiment 

### Change made: 

In routes/packages.js i moved the apiKey to the end of the order for the post route.

### What broke:

The security check of the application broke because even without an API key, the POST request was successful. 

![alt text](<screenshots/Screenshot (59).png>)

### Why it broke:

It broke because the application created the package before checking for the API key as the order has been manipulated.

### What error occured if any:

No error occured in this case.