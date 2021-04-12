import React, { useEffect, useState } from 'react'
import FavoriteCitiesItem from './FavoriteCitiesItem'
import { connect } from 'react-redux'

function FavoriteCitiesList(props) {
    const initList = JSON.parse(localStorage.getItem('favoriteCities')) || [];
   
    const [favoriteCitiesList, setFavoriteCities] = useState(initList)
    console.log(favoriteCitiesList)
    useEffect(()=>{
        if (localStorage.getItem('favoriteCities') !== undefined) {
            setFavoriteCities(JSON.parse(localStorage.getItem('favoriteCities')) || '')
            console.log(props.favoriteCities)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => {
        if (localStorage.getItem('favoriteCities') !== undefined) {
            setFavoriteCities(JSON.parse(localStorage.getItem('favoriteCities')))
            console.log(props.favoriteCities)
        }


    }, [props.favoriteCities])


    return (
        <div className={` favoriteCitiesList ${props.openFav && 'listShow'}  `}>
            <h1>Favorite Cities</h1> <span className='close' onClick={props.closeFavList}>&times;</span>
            {favoriteCitiesList.length ? favoriteCitiesList.map((city, index) => (
                <FavoriteCitiesItem key={index} city={city} closeFavList={props.closeFavList}  />
            )) : <div>No favorites cities yet</div>}
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        favoriteCities: state.favoriteCitiesReducer
    }
}

export default connect(mapStateToProps)(FavoriteCitiesList)
