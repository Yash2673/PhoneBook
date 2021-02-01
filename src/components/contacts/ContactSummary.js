import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContact,favouriteContact } from '../../store/actions/contactActions'
import { Link } from 'react-router-dom'

class ContactSummary extends Component{

    handleDelete = (key) => {
        this.props.deleteContact(key,this.props.currentUser);
    }

    handleFavourite = (key) => {
        this.props.favouriteContact(key,this.props.currentUser);
    }

    render(){
        const {contact} = this.props;
        return(
            <div className="project-summary">
                <div className="card">
                    <div className="card-content grey-text text-darken-3">
                        <div className="card-title">{contact.name}</div>
                        <p>{contact.number}</p>
                        <p>{contact.email}</p>
                        <Link to={'/create/'+contact.key}>Edit Contact</Link><br/>
                        <button type="delete" className="del-button blue btn z-depth-0" onClick={() => {this.handleDelete(contact.key)}}>Delete Contact</button>
                        <button type="delete" className="fav-button grey btn z-depth-0" onClick={() => {this.handleFavourite(contact.key)}}>Add to Favourites</button>
                    </div>
                </div>
            </div>
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
        deleteContact : (key,currentUser) => {dispatch(deleteContact(key,currentUser))},
        favouriteContact : (key,currentUser) => {dispatch(favouriteContact(key,currentUser))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactSummary)