const express = require('express');
const router = express.Router();
const {getContacts} = require('../controllers/contacts');

// pass control to the controller and go execute getContacts
router.route('/').get(getContacts);

module.exports =router;