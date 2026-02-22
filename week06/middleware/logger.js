// middleware/logger.js
function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next(); // important: pass control to the next middleware/route
}

module.exports = logger;