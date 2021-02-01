import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'
import ContactList from '../contacts/ContactList'
import FavouriteList from '../contacts/FavouriteList'

class Dashboard extends Component{

    state = {
        contacts : this.props.contactList
    }

    render(){
        if(!this.props.isLogged)
            return <Redirect to='/signup' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h4>Contacts</h4>
                        {this.props.contactList.length>0 ? <ContactList contactList={this.props.contactList}/> : 
                            <h5>You have no contacts yet !</h5>}
                    </div>
                    <div className="col s12 m6">
                        <h4>Favourites</h4>
                        {this.props.favouriteList.length>0 ? <FavouriteList favouriteList={this.props.favouriteList} /> : 
                            <h5>You have no favourites yet !</h5>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let contactList = [],favouriteList=[];
    for(var i=0;i<state.contact.users.length;i++)
    {
        if(state.contact.users[i].email===state.auth.currentUser.email)
        {
            contactList = state.contact.users[i].contacts
            break;
        }
    }
    for(var i=0;i<state.contact.users.length;i++)
    {
        if(state.contact.users[i].email===state.auth.currentUser.email)
        {
            favouriteList = state.contact.users[i].favourites
            break;
        }
    }
    return{
        contactList : contactList,
        favouriteList : favouriteList,
        isLogged : state.auth.isLogged,
        currentUser : state.auth.currentUser,
        users : state.contact.users
    }
}

export default connect(mapStateToProps)(Dashboard)