const express = require('express');
const router = express.Router();

const users = require('../middleware/users-mid');
const taskController = require('../controllers/tasks-cont');

router.get('/', users, taskController.getTasks);          // READ all
router.get('/:id', users, taskController.getTaskById);    // READ one

router.post('/', users, taskController.createTask);       // CREATE

router.put('/:id', users, taskController.updateTask);     // full replace
router.patch('/:id', users, taskController.patchTask);    // partial update

router.delete('/:id', users, taskController.deleteTask);  // DELETE

module.exports = router;