const express = require("express");
const app = express();

// Routes
const packageRoutes = require("./routes/packages");
const orderRoutes = require("./routes/orders");

// Middlewares
const logger = require("./middleware/logger");
const timer = require("./middleware/timer");

app.use(express.json());     // JSON parsing
app.use(logger);             // Request logging
app.use(timer);              // Timing middleware

// Routes
app.use("/packages", packageRoutes);
app.use("/orders", orderRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: {
            code: "NOT_FOUND",
            message: "Route not found"
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});