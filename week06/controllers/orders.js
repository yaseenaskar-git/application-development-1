// controllers/orders.js

// In-memory storage for orders
const orders = [];
let nextOrderId = 1;

exports.listOrders = (req, res) => {
    res.status(200).json(orders);
};

exports.getOrder = (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Order not found" } });
    res.status(200).json(order);
};

exports.createOrder = (req, res) => {
    const { userId, packageId, status } = req.body;
    if (!userId || !packageId) {
        return res.status(400).json({ error: { code: "VALIDATION_ERROR", message: "userId and packageId are required" } });
    }
    if (orders.some(o => o.userId === userId && o.packageId === packageId)) {
        return res.status(409).json({ error: { code: "CONFLICT", message: "User already has this order" } });
    }
    const newOrder = { id: nextOrderId++, userId, packageId, status: status || "pending" };
    orders.push(newOrder);
    res.status(201).json(newOrder);
};

exports.updateOrder = (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Order not found" } });
    const { userId, packageId, status } = req.body;
    if (userId !== undefined) order.userId = userId;
    if (packageId !== undefined) order.packageId = packageId;
    if (status !== undefined) order.status = status;
    res.status(200).json(order);
};

exports.deleteOrder = (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Order not found" } });
    orders.splice(index, 1);
    res.status(204).send();
};