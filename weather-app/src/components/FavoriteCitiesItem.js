import React from 'react'

export default function FavoriteCitiesItem() {
    return (
        <div className='favoriteCityCard'>
            <span className='cityName'>california</span> <div className='info'>
                <span>&#9729;</span>
                <span>temp</span>
                <span>wind speed</span>
                <span className='deleteCity'>&times;</span>
            </div>
        </div>
    )
}
