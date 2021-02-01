export const createContact = (currentUser) => {
    return(dispatch) => {
        dispatch({type:'Create_Contact',currentUser:currentUser});
    }
}

export const editContact = (contact,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Edit_Contact',contact:contact,currentUser:currentUser});
    }
}

export const editFavouritesContact = (contact,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Edit_Favourites_Contact',contact:contact,currentUser:currentUser});
    }
}

export const deleteContact = (key,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Delete_Contact',key:key,currentUser:currentUser})
    }
}

export const deleteFavouritesContact = (key,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Delete_Favourites_Contact',key:key,currentUser:currentUser})
    }
}

export const favouriteContact = (key,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Favourite_Contact',key:key,currentUser:currentUser})
    }
}

export const favouriteRemoveContact = (key,currentUser) => {
    return(dispatch) => {
        dispatch({type:'Favourite_Remove_Contact',key:key,currentUser:currentUser})
    }
}

export const createUserContact = (user) => {
    return(dispatch) => {
        dispatch({type:'Create_User_Contact',user:user})
    }
}