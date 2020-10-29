const express = require('express');
const router = express.Router();
const {getContacts,addContact,findContact} = require('../controllers/contacts');

// pass control to the controller and go execute getContacts
router.route('/').get(getContacts).post(addContact);

// pass control to the controller and go execute findContact
router.route('/:name').get(findContact);

module.exports =router;