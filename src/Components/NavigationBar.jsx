import React, {useEffect} from 'react'

const NavigationBar = () => {

    return (
        <nav>
            <ul className="navigationBar">
                <li><a href="#home" className="navigationItemActive">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavigationBar