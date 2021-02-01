import React from 'react'
import ContactSummary from './ContactSummary'

const ContactList = ({contactList}) => {
    return(
        <div className="section contact-list">
            {contactList && contactList.map(contact => {
                return(
                    <ContactSummary contact={contact} />
                )
            })}
        </div>
    )
}
export default ContactList