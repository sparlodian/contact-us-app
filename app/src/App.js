import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AppRouter from './services/app-router';
import AddContactComponent from './components/add-contact';
import EditContactComponent from './components/edit-contact';
import ListContactsComponent from './components/list-contacts';
import React from "react";

function App() {
  return (
    <div className="container">
      <AppRouter/>
    </div>
  );
}

export default App;
