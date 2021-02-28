import React, { Component } from 'react'
import ContactService from '../../services/contactservice';

class EditContactComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            firstname: '',
            familyname: '',
            address: '',
            postnumber: '',
            postcity: '',
            email: '',
            phonenumber: '',
            msgclient: '',
            msginternal: '',
        }
        this.saveContact = this.saveContact.bind(this);
        this.loadContact = this.loadContact.bind(this);
    }

    componentDidMount() {
        this.loadContact();
    }

    loadContact() {
        ContactService.fetchContactById(window.localStorage.getItem("contactId"))
            .then((res) => {
                let contact = res.data.result;
                this.setState({
                id: contact.id,
                firstname: contact.firstname,
                familyname: contact.familyname,
                address: contact.address,
                postnumber: contact.postnumber,
                postcity: contact.postcity,
                email: contact.email,
                phonenumber: contact.phonenumber,
                msgclient: contact.msgclient,
                msginternal: contact.msginternal,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveContact = (e) => {
        e.preventDefault();
        let contact = {
            id: this.state.id, 
            firstname: this.state.firstname, 
            familyname: this.state.familyname,
            address: this.state.address,
            postnumber: this.state.postnumber,
            postcity: this.state.postcity,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            msgclient: this.state.msgclient,
            msginternal: this.state.msginternal
        };
        ContactService.editContact(contact)
            .then(res => {
                this.setState({message : 'Contact added successfully.'});
                this.props.history.push('/contacts');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Contact</h2>
                <form>

                    <div className="form-group">
                        <label>First name:</label>
                        <input type="text" placeholder="firstname" name="firstname" className="form-control" defaultValue={this.state.firstname}/>
                    </div>

                    <div className="form-group">
                        <label>Family name:</label>
                        <input type="text" placeholder="familyname" name="familyname" className="form-control" value={this.state.familyname} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Post Number:</label>
                        <input type="text" placeholder="postnumber" name="postnumber" className="form-control" value={this.state.postnumber} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Post City:</label>
                        <input type="text" placeholder="postcity" name="postcity" className="form-control" value={this.state.postcity} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" placeholder="postcity" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Phonenumber:</label>
                        <input type="text" placeholder="phonenumber" name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Client's message:</label>
                        <textarea type="text" placeholder="msgclient" name="msgclient" className="form-control" value={this.state.msgclient} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Internal comment:</label>
                        <textarea type="text" placeholder="msginternal" name="msginternal" className="form-control" value={this.state.msgclient} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveContact}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditContactComponent;