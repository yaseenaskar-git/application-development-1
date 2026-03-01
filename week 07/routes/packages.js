// routes/packages.js
const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packages');

router.get('/', packagesController.listPackages);
router.get('/:id', packagesController.getPackage);
router.post('/', packagesController.createPackage);
router.patch('/:id', packagesController.updatePackage);
router.delete('/:id', packagesController.deletePackage);

module.exports = router;