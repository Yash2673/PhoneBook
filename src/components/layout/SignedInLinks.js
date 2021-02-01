import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { createContact } from '../../store/actions/contactActions'
import { render } from 'react-dom'
import { Redirect } from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'

class SignedInLinks extends Component {

    handleClick = (e) => {
        this.props.createContact(this.props.currentUser);
    }

    handleLogout = (e) => {
        this.props.signOut();
    }

    render(){
        return(
            <ul className="right">
                <li onClick={this.handleClick} className="Contact-Create">Create Contact</li>
                <li onClick={this.handleLogout}><a>Log Out</a></li>
                <li><NavLink to='/Dashboard' className="btn btn-floating blue lighten-1">{this.props.currentUser.firstName[0]+this.props.currentUser.lastName[0]}</NavLink></li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser : state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createContact : (currentUser) => {dispatch(createContact(currentUser))},
        signOut : () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)