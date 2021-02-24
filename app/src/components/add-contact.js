import React, { Component } from 'react'
import ContactService from "../services/contactservice";

class AddContactComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstname: '',
            familyName: '',
            address: '',
            postnumber: '',
            postcity: '',
            email: '',
            phonenumber: '',
            msgclient: '',
        }
        this.saveContact = this.saveContact.bind(this);
    }

    saveContact = (e) => {
        e.preventDefault();
        let contact = {
             firstname: this.state.firstname,
             familyname: this.state.familyname,
             address: this.state.address,
             postnumber: this.state.postnumber,
             postcity: this.state.postcity,
             email: this.state.email,
             phonenumber: this.state.phonenumber,
             msgclient: this.state.msgclient};
        ContactService.addContact(contact)
            .then(res => {
                this.setState({message : 'Contact added successfully.'});
                this.props.history.push('/contacts');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Contact</h2>
                <form>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" placeholder="First name" name="firstname" className="form-control" value={this.state.firstname} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Family name:</label>
                    <input type="text" placeholder="Family name" name="familyname" className="form-control" value={this.state.familyname} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Number:</label>
                    <input type="text" placeholder="Post Number" name="postnumber" className="form-control" value={this.state.postnumber} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post City:</label>
                    <input type="text" placeholder="Post City" name="postcity" className="form-control" value={this.state.postcity} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label> Phonenumber:</label>
                    <input type="text" placeholder="Phonenumber" name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Message:</label>
                    <textarea type="text" placeholder="My Message" name="msgclient" className="form-control" value={this.state.MsgClient} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveContact}>Save</button>
            </form>
        </div>
        );
    }
}

export default AddContactComponent;