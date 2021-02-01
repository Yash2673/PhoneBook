import React from 'react'
import FavouriteSummary from './FavouriteSummary'

const FavouriteList = ({favouriteList}) => {
    return(
        <div className="section contact-list">
            {favouriteList && favouriteList.map(contact => {
                return(
                    <FavouriteSummary contact={contact} />
                )
            })}
        </div>
    )
}
export default FavouriteList