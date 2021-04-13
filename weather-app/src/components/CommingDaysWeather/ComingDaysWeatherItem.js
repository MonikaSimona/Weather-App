import React from 'react'

export default function ComingDaysWeatherItem(props) {
    const convertTemp = (fareinheit) => {
        const fTemp = fareinheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        return fToCel.toFixed(2);
    }
    return (


        <ul className='comingDaysWeather'>
            <li><span className='day' >{props.day}</span></li>
            <li> <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" /></li>
            <li><span>Max Temp. &nbsp;</span> {props.tempMax} &deg; F / {convertTemp(props.tempMax)} &deg; C </li>
            <li><span>Min Temp. &nbsp;</span> {props.tempMin} &deg; F / {convertTemp(props.tempMin)} &deg; C </li>
        </ul>

    )
}
