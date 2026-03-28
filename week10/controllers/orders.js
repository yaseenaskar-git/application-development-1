const db = require("../db");

// GET /orders
exports.getAllOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// GET /orders/:id
exports.getOrderById = (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM orders WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

// POST /orders
exports.createOrder = (req, res) => {
  const { product, quantity, status } = req.body;

  const sql = "INSERT INTO orders (product, quantity, status) VALUES (?, ?, ?)";
  db.query(sql, [product, quantity, status], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Order created", id: result.insertId });
  });
};

// PATCH /orders/:id
exports.updateOrder = (req, res) => {
  const id = req.params.id;
  const { product, quantity, status } = req.body;

  const sql = "UPDATE orders SET product = ?, quantity = ?, status = ? WHERE id = ?";
  db.query(sql, [product, quantity, status, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Order updated" });
  });
};

// DELETE /orders/:id
exports.deleteOrder = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM orders WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Order deleted" });
  });
};