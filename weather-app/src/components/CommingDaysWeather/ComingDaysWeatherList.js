import React, { useEffect } from 'react'
import ComingDaysWeatherItem from './ComingDaysWeatherItem'
import { connect } from 'react-redux'
import { setComingDaysWeather } from '../../store/actions/searchDataActions'
import { currentCity } from '../../store/actions/currentDataActions'
function ComingDaysWeatherList(props) {

    useEffect(() => {
        props.setComingDaysCity(props.currentdata.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        props.setComingDaysCity(props.currentdata.name)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentdata])

    var d = new Date();

    return (
        <>

            {props.comingDaysWeather.data && (<div className='comingDaysWeatherContainer'>
                <h1>Weather for {props.comingDaysWeather.data.list[0].name.toUpperCase()} in  {props.comingDaysWeather.data.list.length} day{props.comingDaysWeather.data.list.length !== 1 ? 's' : ''} </h1>
                {props.comingDaysWeather.data.list && props.comingDaysWeather.data.list.map((day, index) => (
                    <ComingDaysWeatherItem key={index}

                        day={(d.getDate() + index).toString() + '/' + (d.getMonth() + 1).toString()}
                        icon={day.weather[0].icon}
                        tempMin={day.main.temp_min}
                        tempMax={day.main.temp_max}
                    />
                ))}

            </div>)}


        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        comingDaysWeather: state.searchDataReducer,
        currentdata: state.currentDataReducer.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setComingDaysCity: (city) => {
            dispatch(setComingDaysWeather(city))
        },
        currentCity: (city) => {
            dispatch(currentCity(city))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComingDaysWeatherList)
