import React from 'react'
import {TiWeatherWindyCloudy} from 'react-icons/ti'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    
                        <li className='logo-icon'><NavLink to='/home'><TiWeatherWindyCloudy/></NavLink></li>
                    
                    
                        <li><NavLink to='/favorites'>Favorite Cities</NavLink></li>
                    
                    
                        <li><NavLink to='/current'>The Weather Today</NavLink></li>
                    
                    
                        <li><NavLink to='coming-days'>The Weather In 10 Days</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    )
}
