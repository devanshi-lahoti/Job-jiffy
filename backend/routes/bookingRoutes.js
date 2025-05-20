const express = require('express');
const router = express.Router();
const { bookService } = require('../controllers/bookingController');

router.post('/book/:serviceType', bookService);

module.exports = router;
