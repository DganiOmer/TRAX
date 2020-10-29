const Joi = require('joi');

let contacts = require('../db/contacts');
const _ = require('lodash');

// Get the list of contact
exports.getContacts = (req, res, next) => {
    res.send(contacts);
};

// Add new contact
exports.addContact =  (req, res, next) => {
    const {error} = validateContact(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const {name,phoneNumber} = req.body;
    const contact = _.find(contacts,['name',name]);

    // if the contact already exists it can not be added 
    if(contact) return res.status(400).send("Contact already exists!");

    const newContact = {name,phoneNumber};

    contacts.push(newContact);

    res.status(200).send(contacts);
};

// Find contact
exports.findContact =  (req, res, next) => {
    const {name} = req.params;

    const contact = _.find(contacts,['name',name]);

    // if contact doesn't exist it can not be found...
    if(!contact) return res.status(400).send("Contact doesn't exist!");

    res.status(200).send(contact);
};

// Validate contact details
function validateContact(contact) {
    const schema = Joi.object({
        name: Joi.string().required(),
        phoneNumber: Joi.string().min(10).max(10).required(),
    });

    return schema.validate(contact);
}