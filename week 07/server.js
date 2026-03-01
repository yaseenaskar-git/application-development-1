// server.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
const logger = require('./middleware/logger');
app.use(logger);

// Routes
const packagesRoutes = require('./routes/packages');
const ordersRoutes = require('./routes/orders');

app.use('/packages', packagesRoutes);
app.use('/orders', ordersRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: { code: "NOT_FOUND", message: "Resource not found" }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});