module.exports = function (req, res, next) {
    const { name, price } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Name is required and must be a string"
            }
        });
    }

    if (price === undefined || typeof price !== "number") {
        return res.status(400).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Price is required and must be a number"
            }
        });
    }

    next(); // Only runs if valid
};