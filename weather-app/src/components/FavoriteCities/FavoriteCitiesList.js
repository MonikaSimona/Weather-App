import React from 'react'
import FavoriteCitiesItem from './FavoriteCitiesItem'

export default function FavoriteCitiesList() {
    return (
        <div className='container favoriteCitiesList'>
            <FavoriteCitiesItem/>
            <FavoriteCitiesItem/>
            <FavoriteCitiesItem/>
        </div>
    )
}
