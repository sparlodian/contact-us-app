import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContactComponent from './add-contact';
import EditContactComponent from './edit-contact';
import ListContactsComponent from './list-contact';
import React from "react";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>Contact-Us MVP CRUD Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListContactsComponent} />
                        <Route path="/contacts" component={ListContactsComponent} />
                        <Route path="/add-contact" component={AddContactComponent} />
                        <Route path="/edit-contact" component={EditContactComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'green',
    margin: '8px'
}

export default AppRouter;