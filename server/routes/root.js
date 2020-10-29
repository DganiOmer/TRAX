const express = require('express');
const router = express.Router();
const {sayHello} = require('../controllers/root');

// pass control to the controller and go execute sayHello
router.route('/').get(sayHello);

module.exports =router;