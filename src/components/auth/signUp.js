import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {SignUp} from '../../store/actions/authActions'
import {createUserContact} from '../../store/actions/contactActions'

class signUp extends Component {
    state = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        error : '',
        users:this.props.users,
        isLogged : false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        this.setState({
            error:''
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        let users = this.state.users;
        var flag = false;
        if(users.length>0)
        {
            for(var i=0;i<users.length;i++)
            {
                if(users[i].email===this.state.email)
                {
                    flag=true;
                    this.setState({
                        error:'User with this email already exists'
                    })
                }
            }

            if(!flag)
            {
                this.props.SignUp(this.state);
                this.props.createUserContact(this.state);
                this.props.history.push('/Dashboard');
            }
        }
        else
        {
            this.props.SignUp(this.state);
            this.props.createUserContact(this.state);
            this.props.history.push('/Dashboard');
        }
    }

    componentDidMount = () => {
        this.setState({
            users : this.props.users,
            isLogged : this.props.isLogged
        })
    }

    render() {
        if(this.state.isLogged)
            return <Redirect to='/Dashboard' />
        return (
            <div className="container">
                <h5 className="center section">Sign-Up</h5>
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" required onChange={this.handleChange} value={this.state.firstName}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" required onChange={this.handleChange} value={this.state.lastName}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" required value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="pink btn z-depth-0">Submit</button>
                    </div>
                    {this.state.error.length>0 ?  <div className="center red-text">{this.state.error}</div> : null}
                </form>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLogged : state.auth.isLogged,
        users : state.contact.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        SignUp : (user) => {dispatch(SignUp(user))},
        createUserContact : (user) => {dispatch(createUserContact(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(signUp)
