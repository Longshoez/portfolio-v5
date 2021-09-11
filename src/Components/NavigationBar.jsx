import React from 'react'

const NavigationBar = () => {
    return (
        <nav>
            <ul className="navigationBar">
                <li><a href="#" className="navigationItemActive">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavigationBar