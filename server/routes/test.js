const express = require('express');
const router = express.Router();
const test = require('../controllers/test'); // Import your controller


router.get('/getFood', test.getFood);

module.exports = router;