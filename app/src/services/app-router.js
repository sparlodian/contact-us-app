import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContactComponent from '../components/add-contact';
import EditContactComponent from '../components/edit-contact';
import ListContactsComponent from '../components/list-contacts';
import React from "react";

const AppRouter = () => {

    return(
        <Router>
            <div className="col-md-6">
                <Switch>
                    <Route exact path="/" component={ListContactsComponent} />
                    <Route path="/contacts" component={ListContactsComponent} />
                    <Route path="/add-contact" component={AddContactComponent} />
                    <Route path="/edit-contact" component={EditContactComponent} />
                </Switch>
            </div>
        </Router>
    )
}

const style = {
    color: 'green',
    margin: '8px'
}

export default AppRouter;