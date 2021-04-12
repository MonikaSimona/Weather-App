import React, { useEffect } from 'react'
import { deleteCityFromFavorites } from '../../store/actions/favoriteCitiesActions'
import { connect } from 'react-redux'

import { currentCity } from '../../store/actions/currentDataActions';

function FavoriteCitiesItem(props) {


    useEffect(() => {
        localStorage.setItem("favoriteCities", JSON.stringify(props.favoriteCities))
    }, [props.favoriteCities])



    const deleteCityFromFav = () => {
        
        console.log(props.city)
        props.deleteCity(props.city)


    }
    const previewCity = () => {
        // props.currentCity(props.city)
        props.closeFavList()
    }
    return (
        <>

            <div className={`favoriteCityCard `} >
                <span className='cityName' onClick={previewCity}>{props.city}</span>
                <div className='info'>
                    &nbsp;
                <span className='deleteCity' onClick={deleteCityFromFav}>&times;</span>
                </div>
            </div>

        </>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        favoriteCities: state.favoriteCitiesReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteCity: (city) => {
            dispatch(deleteCityFromFavorites(city))
        },
        currentCity: (city) => {
            dispatch(currentCity(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCitiesItem)