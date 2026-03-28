module.exports = function (req, res, next) {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== "12345") {
        return res.status(401).json({
            error: {
                code: "UNAUTHORIZED",
                message: "Invalid or missing API key"
            }
        });
    }

    next();
};