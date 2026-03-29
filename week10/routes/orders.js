// routes/orders.js
const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders');
const apiKey = require('../middleware/apiKey');

// Public routes
router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);

// Protected routes
router.post('/', apiKey, ordersController.createOrder);
router.patch('/:id', apiKey, ordersController.updateOrder);
router.delete('/:id', apiKey, ordersController.deleteOrder);

module.exports = router;