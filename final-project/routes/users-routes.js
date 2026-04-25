const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-cont');

router.post('/login', usersController.login);
router.post('/logout', usersController.logout);
router.get('/me', usersController.currentUser);

module.exports = router;