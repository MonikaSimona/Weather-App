import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBox from './SearchBox';
import {MdFavorite} from 'react-icons/md'


function CurrentWeather(props) {
    const [icon, setIcon] = useState('');
    const convertTemp = (fareinheit) => {
        const fTemp = fareinheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        return fToCel;
    }
    console.log(props.currentData)
    useEffect(() => {
        const iconName = props.currentData.weather[0].icon;

        setIcon(iconName)
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos)

        })
    }, [])

    return (
        <>
        <SearchBox/>
            <div className='container currentWeather'>
                <h1>The weather today</h1>
                <div className="content">
                    <p>Current weather for <span className="city">{props.currentData.name}</span>,<span className="country">{props.currentData.sys.country}</span> <span className="icon">
                        <MdFavorite className='favIcon'/>
                    </span></p> 
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                    <ul>
                        <li>
                            <span className="title"> &nbsp;</span> <span className="info">{props.currentData.weather[0].description}</span>
                        </li>
                        <li>
                            <span className="title">Temperature:</span> <span className="info">{props.currentData.main.temp} &deg;F / {convertTemp(props.currentData.main.temp)} &deg;C</span>
                        </li>
                        <li>
                            <span className="title">Feels like:</span> <span className="info">{props.currentData.main.feels_like} &deg;F / {convertTemp(props.currentData.main.temp)} &deg;C</span>
                        </li>
                        <li>
                            <span className="title">Humidity:</span> <span className="info">{props.currentData.main.humidity}</span>
                        </li>
                        <li>
                            <span className="title">Wind:</span> <span className="info">{props.currentData.wind.deg} deg, speed {props.currentData.wind.speed} km/h</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentData: state.currentDataReducer
    }
}
export default connect(mapStateToProps, null)(CurrentWeather)