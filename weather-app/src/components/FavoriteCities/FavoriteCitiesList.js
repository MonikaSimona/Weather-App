import React, { useEffect, useState } from 'react'
import FavoriteCitiesItem from './FavoriteCitiesItem'
import { connect } from 'react-redux'

function FavoriteCitiesList(props) {
    
    // const initList = localStorage.getItem("favoriteCities") === '[]' ? '' : localStorage.getItem("favoriteCities");
   
    const [favoriteCitiesList, setFavoriteCities] = useState({})
    console.log(favoriteCitiesList)
    useEffect(()=>{
        const data  = localStorage.getItem("favoriteCities");
        console.log(data)
        if (data) {
            setFavoriteCities(JSON.parse(data))
        }
    
    },[])
    useEffect(() => {
        const data  = localStorage.getItem("favoriteCities");
        if (data) {
            setFavoriteCities(JSON.parse(data))
        }


    }, [ props.favoriteCities])


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
