import React from 'react'
import Icon from './Icon'
import { BrowserView, MobileView } from 'react-device-detect';

const NavigationBar = () => {

    return (
        <nav>
            <ul className="navigationBar">      
                <BrowserView>
                    <li><a href="#home" className="navigationItemActive">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </BrowserView>                      
                <MobileView>
                    <li>
                        <a href="#contact">
                            <Icon icon="Menu" tooltip="Menu" link="" />
                        </a>
                    </li>        
                </MobileView>                                
            </ul>
        </nav>
    )
}

export default NavigationBar