import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavouritesContact,favouriteRemoveContact } from '../../store/actions/contactActions'
import { Link } from 'react-router-dom'

class FavouriteSummary extends Component{

    handleDelete = (key) => {
        this.props.deleteFavouritesContact(key,this.props.currentUser);
    }

    handleFavourite = (key) => {
        this.props.favouriteRemoveContact(key,this.props.currentUser);
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
                        <Link to={'/create/favourites/'+contact.key}>Edit Contact</Link><br/>
                        <button type="delete" className="del-button blue btn z-depth-0" onClick={() => {this.handleDelete(contact.key)}}>Delete Contact</button>
                        <button type="delete" className="fav-button grey btn z-depth-0" onClick={() => {this.handleFavourite(contact.key)}}>Remove from Favourites</button>
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
        deleteFavouritesContact : (key,currentUser) => {dispatch(deleteFavouritesContact(key,currentUser))},
        favouriteRemoveContact : (key,currentUser) => {dispatch(favouriteRemoveContact(key,currentUser))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavouriteSummary)