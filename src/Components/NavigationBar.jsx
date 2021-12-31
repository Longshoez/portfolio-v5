import React from 'react'
import Icon from './Icon'
import { isMobile } from 'react-device-detect';

const NavigationBar = () => {    
    
    /*
    add intersection observer here to add an active link class to each navlink as soon as
    a corresponding section 
    */

    return (
        <nav>
            <ul className="navigationBar">      
                {isMobile ? (
                    <li>
                        <a href="#contact">
                            <Icon icon="Menu" tooltip="Menu" link="" />
                        </a>
                    </li>        
                ) : (
                    <>
                        <li><a href="#home" className="navLink">Home</a></li>
                        <li><a href="#about" className="navLink">About</a></li>
                        <li><a href="#work" className="navLink">My Work</a></li>
                        <li><a href="#contact" className="navLink">Contact</a></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavigationBar