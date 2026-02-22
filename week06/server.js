// server.js
const express = require('express');
const app = express();

// -------------------- Middleware --------------------
app.use(express.json()); // JSON parsing

// Request logging middleware
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
};
app.use(logger);

// -------------------- In-Memory Storage --------------------
let packages = [];
let orders = [];

let nextPackageId = 1;
let nextOrderId = 1;

// -------------------- PACKAGES ENDPOINTS --------------------

// GET /packages - list all packages
app.get('/packages', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = packages.slice(startIndex, endIndex);
    const total = packages.length;

    res.status(200).json({
        data: paginatedData,
        meta: { page, limit, total }
    });
});

// GET /packages/:id - get one package
app.get('/packages/:id', (req, res) => {
    const pkg = packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Package not found" }
        });
    }
    res.status(200).json(pkg);
});

// POST /packages - create a new package
app.post('/packages', (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({
            error: { code: "VALIDATION_ERROR", message: "Name and price are required" }
        });
    }
    // Optional: check for duplicate name
    if (packages.some(p => p.name === name)) {
        return res.status(409).json({
            error: { code: "CONFLICT", message: "Package with this name already exists" }
        });
    }
    const newPackage = { id: nextPackageId++, name, price };
    packages.push(newPackage);
    res.status(201).json(newPackage);
});

// PATCH /packages/:id - update a package partially
app.patch('/packages/:id', (req, res) => {
    const pkg = packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Package not found" }
        });
    }

    const { name, price } = req.body;
    if (name !== undefined) pkg.name = name;
    if (price !== undefined) pkg.price = price;

    res.status(200).json(pkg);
});

// DELETE /packages/:id - delete a package
app.delete('/packages/:id', (req, res) => {
    const index = packages.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Package not found" }
        });
    }
    packages.splice(index, 1);
    res.status(204).send();
});

// -------------------- ORDERS ENDPOINTS --------------------

// GET /orders - list all orders
app.get('/orders', (req, res) => {
    res.status(200).json(orders);
});

// GET /orders/:id - get one order
app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Order not found" }
        });
    }
    res.status(200).json(order);
});

// POST /orders - create a new order
app.post('/orders', (req, res) => {
    const { userId, packageId, status } = req.body;
    if (!userId || !packageId) {
        return res.status(400).json({
            error: { code: "VALIDATION_ERROR", message: "userId and packageId are required" }
        });
    }

    // Optional: check for duplicate order of same package by same user
    if (orders.some(o => o.userId === userId && o.packageId === packageId)) {
        return res.status(409).json({
            error: { code: "CONFLICT", message: "User already has this order" }
        });
    }

    const newOrder = { id: nextOrderId++, userId, packageId, status: status || "pending" };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// PATCH /orders/:id - update an order partially
app.patch('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Order not found" }
        });
    }

    const { userId, packageId, status } = req.body;
    if (userId !== undefined) order.userId = userId;
    if (packageId !== undefined) order.packageId = packageId;
    if (status !== undefined) order.status = status;

    res.status(200).json(order);
});

// DELETE /orders/:id - delete an order
app.delete('/orders/:id', (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({
            error: { code: "NOT_FOUND", message: "Order not found" }
        });
    }
    orders.splice(index, 1);
    res.status(204).send();
});

// -------------------- 404 HANDLER --------------------
app.use((req, res) => {
    res.status(404).json({
        error: { code: "NOT_FOUND", message: "Resource not found" }
    });
});

// -------------------- START SERVER --------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});