const express = require('express');
const router = express.Router();
const users = require('../middleware/users');
const taskController = require('../controllers/tasks-controller');

router.get('/', users, taskController.getTasks);

module.exports = router;