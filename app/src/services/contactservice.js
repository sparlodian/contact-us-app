import axios from 'axios';

const ITEMSERVICE_API_BASE_URL = 'http://localhost:8080/contacts';

class ContactService {

    fetchContacts() {
        return axios.get(ITEMSERVICE_API_BASE_URL);
    }

    fetchContactById(contactId) {
        return axios.get(ITEMSERVICE_API_BASE_URL + '/' + contactId);
    }

    deleteContact(contactId) {
        return axios.delete(ITEMSERVICE_API_BASE_URL + '/' + contactId);
    }

    addContact(contact) {
        return axios.post(ITEMSERVICE_API_BASE_URL, contact);
    }

    editContact(contact) {
        return axios.put(ITEMSERVICE_API_BASE_URL + '/' + contact.id, contact);
    }

}

export default new ContactService();