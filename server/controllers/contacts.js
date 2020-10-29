const contacts = require('../db/contacts');

exports.getContacts = (req, res, next) => {
    res.send(contacts);
};