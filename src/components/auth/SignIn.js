import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email : '',
        password : '',
        error:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        this.setState({
            error : ''
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        let users = this.props.users;
        let flag=false;
        for(var i=0;i<users.length;i++)
        {
            if(users[i].email===this.state.email && users[i].password===this.state.password)
            {
                flag=true;
                break;
            }
        }
        if(flag===true)
        {
            this.props.signIn(this.state);
            this.props.history.push('/Dashboard');
        }
        else
        {
            this.setState({
                error : 'No such user found'
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h5 className="center section">Sign-In</h5>
                <form className="white" onSubmit={this.handleSubmit}>
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
                    {this.state.error.length>0 ? <div className="center red-text">{this.state.error}</div> : null}
                </form>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users : state.auth.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (user) => {dispatch(signIn(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
