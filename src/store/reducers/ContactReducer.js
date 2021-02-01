const initState = {
    users : []
}

const ContactReducer = (state=initState,action) => {
    if(action.type==='Create_User_Contact')
    {
        return{
            ...state,
            users : [...state.users,{email:action.user.email,contacts:[],favourites:[]}]
        }
    }
    else if(action.type==='Create_Contact')
    {
        var i;
        for(i=0;i<state.users.length;i++)
        {
            if(state.users[i].email===action.currentUser.email)
            {
                state.users[i].contacts = [...state.users[i].contacts,{name:'Name',number:'Number',key:Math.random(),email:'Email'}]
            }
        }
        return{
            ...state
        }
    }
    else if(action.type==='Edit_Contact')
    {
        let editedContacts = [];
        var k;
        // console.log(action.currentUser);
        // console.log(state.users);
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].contacts.length;i++)
                {  
                    if(state.users[k].contacts[i].key!=action.contact.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].contacts[i]]
                        break;
                    }
                }
                break;
            }
        }
        
        state.users[k].contacts = editedContacts;
        state.users[k].contacts = [...state.users[k].contacts,{name:action.contact.name,number:action.contact.number,key:action.contact.key,email:action.contact.email}]
        return{
            ...state,
        }
    }
    else if(action.type==='Edit_Favourites_Contact')
    {
        let editedContacts = [];
        var k=0;
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].favourites.length;i++)
                {  
                    if(state.users[k].favourites[i].key!=action.contact.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].favourites[i]]
                        break;
                    }
                }
                break;
            }
        }
        
        state.users[k].favourites = editedContacts;
        state.users[k].favourites = [...state.users[k].favourites,{name:action.contact.name,number:action.contact.number,key:action.contact.key,email:action.contact.email}]
        return{
            ...state,
        }
    }
    else if(action.type==='Delete_Contact')
    {
        let editedContacts = [];
        var k;
        // console.log(action.currentUser);
        // console.log(state.users);
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].contacts.length;i++)
                {  
                    if(state.users[k].contacts[i].key!=action.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].contacts[i]]
                        break;
                    }
                }
                break;
            }
        }
        
        state.users[k].contacts = editedContacts;

        return{
            ...state
        }
    }
    else if(action.type==='Delete_Favourites_Contact')
    {
        let editedContacts = [];
        var k=0;
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].favourites.length;i++)
                {  
                    if(state.users[k].favourites[i].key!=action.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].favourites[i]]
                        break;
                    }
                }
                break;
            }
        }
        
        state.users[k].favourites = editedContacts;
        return{
            ...state
        }
    }
    else if(action.type==='Favourite_Contact')
    {
        let editedContacts = [],removedContact={};
        var k;
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].contacts.length;i++)
                {  
                    if(state.users[k].contacts[i].key!=action.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].contacts[i]]
                    }
                    else
                    {
                        removedContact = state.users[k].contacts[i];
                    }
                }
                break;
            }
        }
        state.users[k].contacts = editedContacts;
        state.users[k].favourites = [...state.users[k].favourites,{name:removedContact.name,number:removedContact.number,key:removedContact.key,email:removedContact.email}];
        return{
            ...state
        }
    }
    else if(action.type==='Favourite_Remove_Contact')
    {
        let editedContacts = [],removedContact={};
        var k;
        for(k=0;k<state.users.length;k++)
        {
            if(state.users[k].email===action.currentUser.email)
            {
                for(var i=0;i<state.users[k].favourites.length;i++)
                {  
                    if(state.users[k].favourites[i].key!=action.key)
                    {
                        editedContacts = [...editedContacts,state.users[k].favourites[i]]
                    }
                    else
                    {
                        removedContact = state.users[k].favourites[i];
                    }
                }
                break;
            }
        }
        state.users[k].favourites = editedContacts;
        state.users[k].contacts = [...state.users[k].contacts,{name:removedContact.name,number:removedContact.number,key:removedContact.key,email:removedContact.email}];
        return{
            ...state
        }
    }
    return state;
}

export default ContactReducer