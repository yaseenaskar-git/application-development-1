app.use(express.json());

const logger = require('./middleware/logger');

// Apply globally (runs for every request)
app.use(logger);

// server.js
const express = require('express');
const app = express();
app.use(express.json()); // for parsing JSON bodies

// -------------------- In-memory storage --------------------
let packages = [];
let orders = [];

let nextPackageId = 1;
let nextOrderId = 1;

// -------------------- PACKAGES ENDPOINTS --------------------

// GET /packages - list all packages
app.get('/packages', (req, res) => {
    res.status(200).json(packages);
});

// GET /packages/:id - get one package
app.get('/packages/:id', (req, res) => {
    const pkg = packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) return res.status(404).json({ error: "Package not found" });
    res.status(200).json(pkg);
});

// POST /packages - create a new package
app.post('/packages', (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const newPackage = { id: nextPackageId++, name, price };
    packages.push(newPackage);
    res.status(201).json(newPackage);
});

// PATCH /packages/:id - update a package partially
app.patch('/packages/:id', (req, res) => {
    const pkg = packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) return res.status(404).json({ error: "Package not found" });

    const { name, price } = req.body;
    if (name !== undefined) pkg.name = name;
    if (price !== undefined) pkg.price = price;

    res.status(200).json(pkg); // returning updated object is okay
});

// DELETE /packages/:id - delete a package
app.delete('/packages/:id', (req, res) => {
    const index = packages.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Package not found" });
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
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.status(200).json(order);
});

// POST /orders - create a new order
app.post('/orders', (req, res) => {
    const { userId, packageId, status } = req.body;
    if (!userId || !packageId) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const newOrder = { id: nextOrderId++, userId, packageId, status: status || "pending" };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// PATCH /orders/:id - update an order partially
app.patch('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: "Order not found" });

    const { userId, packageId, status } = req.body;
    if (userId !== undefined) order.userId = userId;
    if (packageId !== undefined) order.packageId = packageId;
    if (status !== undefined) order.status = status;

    res.status(200).json(order);
});

// DELETE /orders/:id - delete an order
app.delete('/orders/:id', (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Order not found" });
    orders.splice(index, 1);
    res.status(204).send();
});

// -------------------- START SERVER --------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: {
            code: "NOT_FOUND",
            message: "Resource not found",
            details: []
        }
    });
});