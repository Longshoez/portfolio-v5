import React from 'react'
import NavigationBar from './NavigationBar'
import Button from './Button'

const Content = () => {
    return (
        <div className="section">
            <NavigationBar />
            <div className="slider"></div>
            <div className="home-cntnt">
                <h1>I design 🎨, code 💻 and <br /> launch 🚀 Websites and <br /> apps, amongst other <br />things.</h1>
                <Button />
            </div>

        </div>
    )
}

export default Content
