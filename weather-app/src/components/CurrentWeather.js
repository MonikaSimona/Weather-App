import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBox from './SearchBox';
import { MdFavorite } from 'react-icons/md'
import { currentCity } from '../store/actions/currentDataActions';
import { addCityToFavorites } from '../store/actions/favoriteCitiesActions';
import FavoriteCitiesList from './FavoriteCities/FavoriteCitiesList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingDaysWeatherList from './CommingDaysWeather/ComingDaysWeatherList';


function CurrentWeather(props) {

    const [openFav, setOpenFav] = useState(false)
    const [open, setOpen] = useState(true)
    const [toggle, setToggle] = useState(false);
    const [coord, setCoord] = useState({ lat: '', long: '' })

    const { currentdata } = props;

    const convertTemp = (fareinheit) => {
        const fTemp = fareinheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        return fToCel.toFixed(2);
    }
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setCoord({ lat: position.coords.latitude, long: position.coords.longitude })
            });
        } else {
            console.log("Not Available");
        }
        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coord.lat}&longitude=${coord.long}&localityLanguage=en`).then(res => {
            if (!currentdata) {
                props.currentCity(res.data.city); //ne brisi
            }
        })



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleWeather = () => {
        setToggle(!toggle)

    }

    const openFavList = () => {
        setOpenFav(true)
        setOpen(false)
    }

    const closeFavList = () => {
        setOpenFav(false)
        setOpen(true)
    }

    const setFavorite = () => {

        if (props.favoriteCities.indexOf(currentdata.name) === -1) {
            props.addCityToFavorites(currentdata.name)
            localStorage.setItem("favoriteCities", JSON.stringify(props.favoriteCities))
        } else {
            toast('You already have that city!')
        }


    }

    return (

        <>
            <SearchBox />
            <div className="wrapper">
                {currentdata ? (<div className=' currentWeather'>
                    <h1>The weather today <span className='date'>{new Date().getDate()}/{new Date().getMonth() + 1}</span> </h1>
                    <div className="content">
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={true} />
                        <p>Current weather for <span className="city">{currentdata.name}</span>,<span className="country">{currentdata.sys.country}</span>
                            <span className="icon" onClick={setFavorite}>
                                <MdFavorite className='favIcon' />
                            </span>
                        </p>
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

                <FavoriteCitiesList openFav={openFav} closeFavList={closeFavList} />
            </div>
            <div onClick={toggleWeather} className='toggle'>See weather for upcoming days</div>

            {toggle && <ComingDaysWeatherList />}




            {open && <div className="openFav" onClick={openFavList}> &larr; open favorites</div>}

        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {

        currentdata: state.currentDataReducer.data,
        favoriteCities: state.favoriteCitiesReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        currentCity: (cityQuery) => {
            dispatch(currentCity(cityQuery))
        },
        addCityToFavorites: (favoriteCity) => {
            dispatch(addCityToFavorites(favoriteCity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)