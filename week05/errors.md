# Defining error handling

### 400 (invalid input)

{ "error":
    {
        "code": "VALIDATION_ERROR",
        "message": "Invalid input",
        "details":
            [
                {
                    "field":"price",
                    "issue":"invalid syntax"
                }
            ]
    }
}

### 404 (not found)

{ "error":
    {
        "code": "NOT_FOUND",
        "message": "Resource missing",
        "details":
            [
                {
                    "field":"packageId",
                    "issue":"Resource not found"
                }
            ]
    }
}

### 409 (conflict)

{ "error":
    {
        "code": "CONFLICT",
        "message": "State conflict",
        "details":
            [
                {
                    "field":"orderId",
                    "issue":"Order already completed"
                }
            ]
    }
}