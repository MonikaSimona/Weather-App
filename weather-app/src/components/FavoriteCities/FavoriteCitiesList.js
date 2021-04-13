import React, { useEffect } from 'react'
import FavoriteCitiesItem from './FavoriteCitiesItem'
import {addAllCities} from '../../store/actions/favoriteCitiesActions'
import { connect } from 'react-redux'

function FavoriteCitiesList(props) {
  
    useEffect(()=>{
        const data = localStorage.getItem("favoriteCities")
        
        if(data){
            console.log(JSON.parse(data))
           props.setFavoriteCities(JSON.parse(data))
            
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


const {favoriteCities} = props
    return (
        <div className={` favoriteCitiesList ${props.openFav && 'listShow'}  `}>
            <h1>Favorite Cities</h1> <span className='close' onClick={props.closeFavList}>&times;</span>
            {favoriteCities.length ? favoriteCities.map((city, index) => (
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFavoriteCities: (cities) => {
            dispatch(addAllCities(cities))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteCitiesList)
