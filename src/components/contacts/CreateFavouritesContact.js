import React, { Component } from 'react'
import {connect} from 'react-redux'
import { editFavouritesContact } from '../../store/actions/contactActions'
import { Redirect } from 'react-router-dom'

class CreateFavouritesProject extends Component {
    state = {
        name : '',
        number : '',
        error:'',
        email:'',
        key:this.props.match.params.id,
        users : this.props.users
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        this.setState({
            error:''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.number.length!==10)
        {
            this.setState({
                error:'Enter valid Mobile Number'
            })
        }
        else
        {
            var flag=false;
            let users = this.state.users;
            for(var i=0;i<users.length;i++)
            {
                if(users[i].email===this.props.currentUser.email)
                {
                    for(var k=0;k<users[i].contacts.length;k++)
                    {
                        if(users[i].contacts[k].name===this.state.name)
                        {
                            this.setState({
                                error:'Contact Name already exists'
                            })
                            flag=true;
                        }
                        else if(users[i].contacts[k].email===this.state.email)
                        {
                            this.setState({
                                error:'Contact Email already exists'
                            })
                            flag=true;
                        }
                        else if(users[i].contacts[k].number===this.state.number)
                        {
                            this.setState({
                                error:'Contact Number already exists'
                            })
                            flag=true;
                        }
                    }

                    for(var k=0;k<users[i].favourites.length;k++)
                    {
                        if(users[i].favourites[k].name===this.state.name)
                        {
                            this.setState({
                                error:'Contact Name already exists'
                            })
                            flag=true;
                        }
                        else if(users[i].favourites[k].email===this.state.email)
                        {
                            this.setState({
                                error:'Contact Email already exists'
                            })
                            flag=true;
                        }
                        else if(users[i].favourites[k].number===this.state.number)
                        {
                            this.setState({
                                error:'Contact Number already exists'
                            })
                            flag=true;
                        }
                    }
                }
            }

            if(!flag)
            {
                this.props.editFavouritesContact(this.state,this.props.currentUser);
                this.setState({
                    name : '',
                    number : '',
                    error:'',
                    email:''
                })
                this.props.history.push('/');
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h5 className="center section">Edit Favourite Contact</h5>
                <form className="white create-pro" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Contact name</label>
                        <input type="text" id="name" required onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="number" >Contact number</label>
                        <input type="number" id="number" required onChange={this.handleChange} value={this.state.number}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Contact email</label>
                        <input type="email" id="email" required onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    {this.state.error.length > 0 ? <p className="red-text">{this.state.error}</p> : null}
                    <div className="input-field">
                        <button type="submit" className="pink btn z-depth-0">Submit</button>
                    </div>
                </form>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser : state.auth.currentUser,
        users : state.contact.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editFavouritesContact : (contact,currentUser) => {dispatch(editFavouritesContact(contact,currentUser))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateFavouritesProject)
