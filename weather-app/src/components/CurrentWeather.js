import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBox from './SearchBox';
import { MdFavorite } from 'react-icons/md'
import { filterCity } from '../store/actions/searchDataActions'
import { currentCity } from '../store/actions/currentDataActions';


function CurrentWeather(props) {

    const convertTemp = (fareinheit) => {
        const fTemp = fareinheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        return fToCel.toFixed(2);
    }
    useEffect(() => {
        props.currentCity('london');

    }, [])

    const setFavorite = () => {
        localStorage.setItem('cityName',currentdata.name)
    }
    console.log(props.currentCity)
    const { currentdata } = props;
    return (

        <>
            <SearchBox />
            {currentdata ? (<div className='container currentWeather'>
                <h1>The weather today</h1>
                <div className="content">
                    <p>Current weather for <span className="city">{currentdata.name}</span>,<span className="country">{currentdata.sys.country}</span> <span className="icon" onClick={setFavorite}>
                        <MdFavorite className='favIcon' />
                    </span></p>
                    <img src={`http://openweathermap.org/img/w/${currentdata.weather[0].icon}.png`} alt="" />
                    <ul>
                        <li>
                            <span className="title"> &nbsp;</span> <span className="info">{currentdata.weather[0].description}</span>
                        </li>
                        <li>
                            <span className="title">Temperature:</span> <span className="info">{currentdata.main.temp} &deg;F / {convertTemp(currentdata.main.temp)} &deg;C</span>
                        </li>
                        <li>
                            <span className="title">Feels like:</span> <span className="info">{currentdata.main.feels_like} &deg;F / {convertTemp(currentdata.main.temp)} &deg;C</span>
                        </li>
                        <li>
                            <span className="title">Humidity:</span> <span className="info">{currentdata.main.humidity}</span>
                        </li>
                        <li>
                            <span className="title">Wind:</span> <span className="info">{currentdata.wind.deg} deg, speed {currentdata.wind.speed} km/h</span>
                        </li>
                    </ul>
                </div>
            </div>) : null}

        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        filteredCity: state.searchDataReducer.data,
        currentdata: state.currentDataReducer.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filter: (cityQuery) => {
            dispatch(filterCity(cityQuery))
        },
        currentCity: (cityQuery) => {
            dispatch(currentCity(cityQuery))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)