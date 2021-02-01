export const signOut = () => {
    return(dispatch) => {
        dispatch({type:'Logout'})
    }
}

export const SignUp = (user) => {
    return(dispatch) => {
        dispatch({type:'Signup',user:user})
    }
}

export const signIn = (user) => {
    return(dispatch) => {
        dispatch({type:'Signin',user:user})
    }
}