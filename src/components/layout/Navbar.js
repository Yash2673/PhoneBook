import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar = ({isLogged}) => {
    const links = isLogged ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/Dashboard' className="left brand-logo">PhoneBook</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        isLogged : state.auth.isLogged
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);