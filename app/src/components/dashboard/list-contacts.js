import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import ContactService from "../../services/contactservice";
import AddContactComponent from './add-contact';
import EditContactComponent from './edit-contact';

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

    deleteContact(id) {
        ContactService.deleteContact(id)
           .then(res => {
               this.setState({message : 'Contact deleted successfully.'});
               this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
           })

    }

    editContact(id) {
        window.localStorage.setItem("contactId", id);
        this.props.history.push('/edit-contact');
    }

    addContact() {
        window.localStorage.removeItem("contactId");
        this.props.history.push('/add-contact');
    }

    render() {
        return (
        <div>
            <hr/>
            <button className="btn btn-danger" id="addContactButton" onClick={() => this.addContact()}> Add Contact</button>
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
                        <th>Client's message</th>
                        <th>Internal Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map(contact =>
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.firstname}</td>
                            <td>{contact.familyname}</td>
                            <td>{contact.address}</td>
                            <td>{contact.postnumber}</td>
                            <td>{contact.postcity}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phonenumber}</td>
                            <td>{contact.msgclient}</td>
                            <td>{contact.msginternal}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => this.editContact(contact.id)}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={() => this.deleteContact(contact.id)}>Delete</button>
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