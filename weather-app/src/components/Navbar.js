import React, { useState } from 'react'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const openNav = () => {
        setShowNav(true)
    }
    const closeNav = () => {
        setShowNav(false)
    }
    return (
        <div>
            <nav>
                <ul>

                    <li onClick={closeNav} className='nav-logo'><NavLink to='/'><TiWeatherWindyCloudy /></NavLink></li>

                    <div className='nav-items'>

                        <li>Weather Forecats</li>
                    </div>

                </ul>
            </nav>
        </div>
    )
}
