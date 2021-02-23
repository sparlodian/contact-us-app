import React, { Component } from 'react'
import ContactService from "../services/contactservice";

class ListContactsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            message: null
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);       
        this.reloadContactList = this.reloadContactList.bind(this);
    }

    componentDidMount() {
        this.reloadContactList();
    }

    reloadContactList() {
        ContactService.fetchContacts()
            .then((res) => {
                this.setState({contacts: res.data.result})
            });
    }

    deleteContact(contactId) {
        ContactService.deleteContact(contactId)
           .then(res => {
               this.setState({message : 'Contact deleted successfully.'});
               this.setState({Contacts: this.state.contacts.filter(contact => contact.id !== contactId)});
           })

    }

    editContact(id) {
        // window.localStorage.setContact("ContactId", id);
        this.props.history.push('/edit-contact');
    }

    addContact() {
        // window.localStorage.removeContact("ContactId");
        this.props.history.push('/add-contact');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Contact Details</h2>
                <button className="btn btn-danger" onClick={() => this.addContact()}> Add Contact</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">id</th>
                            <th>First name</th>
                            <th>Family name</th>
                            <th>Address</th>
                            <th>Post Number</th>
                            <th>Post City</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Msg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(contact =>
                            <tr key={contact.id}>
                                <td>{contact.firstName}</td>
                                <td>{contact.familyname}</td>
                                <td>{contact.address}</td>
                                <td>{contact.postnumber}</td>
                                <td>{contact.postcity}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phonenumber}</td>
                                <td>{contact.msgclient}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => this.deleteContact(contact.id)}> Delete</button>
                                    <button className="btn btn-success" onClick={() => this.editContact(contact.id)}> Edit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListContactsComponent;