import { ContactsCollection as Contact } from '../db/models/contacts.js';

const getAllContacts = () => Contact.find();
const getContactById = (id) => Contact.findById(id);

export default { getAllContacts, getContactById };