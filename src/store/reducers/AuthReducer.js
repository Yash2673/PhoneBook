const initState = {
    isLogged : false,
    users : [],
    currentUser : {}
}

const AuthReducer = (state=initState,action) => {
    if(action.type==='Logout')
    {
        return{
            ...state,
            isLogged : false,
            currentUser : {}
        }
    }
    else if(action.type==='Signup')
    {
        return{
            ...state,
            isLogged : true,
            users : [...state.users,{firstName:action.user.firstName,lastName:action.user.lastName,email:action.user.email,password:action.user.password}],
            currentUser : {firstName:action.user.firstName,lastName:action.user.lastName,email:action.user.email,password:action.user.password}
        }
    }
    else if(action.type==='Signin')
    {
        for(var i=0;i<state.users.length;i++)
        {
            if(action.user.email===state.users[i].email)
            {
                state.currentUser = state.users[i];
            }
        }
        return{
            ...state,
            isLogged : true
        }
    }
    return{
        ...state
    };
}

export default AuthReducer