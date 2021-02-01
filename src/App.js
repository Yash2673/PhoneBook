import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import CreateContact from './components/contacts/CreateContact';
import CreateFavouritesContact from './components/contacts/CreateFavouritesContact';
import { connect } from 'react-redux';
import signUp from './components/auth/signUp';
import Welcome from './components/dashboard/Welcome';
import Footer from './components/dashboard/Footer';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={signUp} />
            <Route path='/create/favourites/:id' component={CreateFavouritesContact} />
            <Route path='/create/:id' component={CreateContact} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route exact path='/' component={Welcome} />
            <Route exact path='/PhoneBook' component={Welcome} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);
