import React, { useState } from 'react'
import {TiWeatherWindyCloudy} from 'react-icons/ti'
import {NavLink} from 'react-router-dom';

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
                    
                        <li onClick={closeNav} className='nav-logo'><NavLink to='/home'><TiWeatherWindyCloudy/></NavLink></li>
                    
                        <img src={require('../assets/left-arrow.svg').default} alt="" className='nav-button' onClick={openNav}/>
                        <div className={`nav-items ${showNav ? 'nav-items-show' : ''}`}>
                        <img src={require('../assets/left-arrow.svg').default} alt="" className='nav-button-close' onClick={closeNav} />
                            <li onClick={closeNav}><NavLink to='/favorites'>Favorite Cities</NavLink></li>
                            <li onClick={closeNav}><NavLink to='/search'>Search for City</NavLink></li>
                            <li onClick={closeNav}><NavLink to='coming-days'>The Weather In 10 Days</NavLink></li>
                        </div>
                    
                </ul>
            </nav>
        </div>
    )
}
