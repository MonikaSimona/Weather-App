import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { filterCity } from '../../store/actions/searchDataActions'
import { currentCity } from '../../store/actions/currentDataActions';
import { addCityToFavorites } from '../../store/actions/favoriteCitiesActions';

function FavoriteCitiesItem(props) {

    useEffect(() => {
        props.currentCity(props.cityName)
    },[])
    const { currentdata } = props
    return (
        <>
            {currentdata ? (
                <div className='favoriteCityCard'>
                    <span className='cityName'>{currentdata.name}</span>
                    <div className='info'>
                        <img src={`http://openweathermap.org/img/w/${currentdata.weather[0].icon}.png`} alt="" />
                        <span>{currentdata.main.temp} &deg;F</span>
                        <span>wind: {currentdata.wind.deg} deg, speed {currentdata.wind.speed} km/h</span>
                        <span className='deleteCity'>&times;</span>
                    </div>
                </div>) : null}
        </>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        filteredCity: state.searchDataReducer.data,
        currentdata: state.currentDataReducer.data,
        favoriteCities: state.favoriteCitiesReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filter: (cityQuery) => {
            dispatch(filterCity(cityQuery))
        },
        currentCity: (cityQuery) => {
            dispatch(currentCity(cityQuery))
        },
        addCityToFavorites: (favoriteCity) => {
            dispatch(addCityToFavorites(favoriteCity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCitiesItem)