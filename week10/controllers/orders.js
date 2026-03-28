const pool = require("../db");

// GET /orders
exports.getAllOrders = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM orders");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET /orders/:id
exports.getOrderById = async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await pool.query(
      "SELECT * FROM orders WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// POST /orders
exports.createOrder = async (req, res) => {
  try {
    const { product, quantity, status } = req.body;

    const [result] = await pool.query(
      "INSERT INTO orders (product, quantity, status) VALUES (?, ?, ?)",
      [product, quantity, status]
    );

    res.json({ message: "Order created", id: result.insertId });
  } catch (err) {
    res.status(500).send(err);
  }
};

// PATCH /orders/:id
exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const { product, quantity, status } = req.body;

    await pool.query(
      "UPDATE orders SET product = ?, quantity = ?, status = ? WHERE id = ?",
      [product, quantity, status, id]
    );

    res.json({ message: "Order updated" });
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE /orders/:id
exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;

    await pool.query(
      "DELETE FROM orders WHERE id = ?",
      [id]
    );

    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};