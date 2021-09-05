import React from 'react'
import NavigationBar from './NavigationBar'
import Button from './Button'
import '../Components/Content.sass'

const Content = () => {
    return (
        <div className="section">
            <NavigationBar />
            <div className="slider"></div>
            <div className="mainContent">
                <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
                {/* 🎨 💻 🚀*/}
                <Button />
            </div>
            <div className="About">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Content
