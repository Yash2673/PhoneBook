import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Welcome extends Component {
    render(){
        if(this.props.isLogged)
            return <Redirect to='/Dashboard' />
        return(
            <div>
                <h5 style={{marginTop:'250px'}} className="center">Welcome User !!</h5>
                <h6 className="center">Sign-up / Login to continue</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLogged: state.auth.isLogged
    }
}

export default connect(mapStateToProps)(Welcome)