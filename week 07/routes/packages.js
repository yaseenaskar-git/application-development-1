// routes/packages.js
const express = require('express');
const router = express.Router();

const packagesController = require('../controllers/packages');
const apiKey = require('../middleware/apiKey');
const validatePackage = require('../middleware/validatePackage');

// Public routes (no API key)
router.get('/', packagesController.listPackages);
router.get('/:id', packagesController.getPackage);

// Protected routes
router.post('/', apiKey, validatePackage, packagesController.createPackage);
router.patch('/:id', apiKey, validatePackage, packagesController.updatePackage);
router.delete('/:id', apiKey, packagesController.deletePackage);

module.exports = router;