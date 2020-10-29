const express = require('express');
const router = express.Router();
const {sayHello} = require('../controllers/root');

router.route('/').get(sayHello);

module.exports =router;