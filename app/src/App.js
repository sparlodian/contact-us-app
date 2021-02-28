import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddContactComponent from './components/dashboard/add-contact';
import EditContactComponent from './components/dashboard/edit-contact';
import ListContactsComponent from './components/dashboard/list-contacts';
import Nav from './components/common/nav';
import React from "react";

function App() {
  return (
    <div className="container">

      <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route exact path="/" component={ListContactsComponent} />
                    <Route path="/contacts" component={ListContactsComponent} />
                    <Route path="/add-contact" component={AddContactComponent} />
                    <Route path="/edit-contact" component={EditContactComponent} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
