import React, { useEffect } from 'react'
import { deleteCityFromFavorites } from '../../store/actions/favoriteCitiesActions'
import { connect } from 'react-redux'
import { currentCity } from '../../store/actions/currentDataActions';

function FavoriteCitiesItem(props) {


    useEffect(() => {
        console.log(props.favoriteCities)
        localStorage.setItem("favoriteCities", JSON.stringify(props.favoriteCities))
    }, [props.favoriteCities])



    const deleteCityFromFav = () => {

        props.deleteCity(props.city)
        if(props.favoriteCities.length === 1){
            localStorage.removeItem("favoriteCities")
        }
    }
    const previewCity = () => {
        props.currentCity(props.city)
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