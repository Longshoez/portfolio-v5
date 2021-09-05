import React from 'react'
import NavigationBar from './NavigationBar'
import Button from './Button'
import Icon from './Icon'
import '../Components/sHome.sass'
import '../Components/sAbout.sass'
import '../Components/sIcon.sass'

const Content = () => {
    return (
        <div className="section">
            <NavigationBar />
            <div className="slider"></div>
            <section className="mainContent">
                <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
                {/* 🎨 💻 🚀*/}
                <Button />
            </section>

            <section className="About">
                <div className="container">
                    <div className="text">
                        <h2 className="">Tech i use</h2>
                    </div>
                    <div className="icons">
                        <Icon className="icon" width={43} height={42} path={"M0.788574 0.634277V41.2624H42.2292V0.634277H0.788574ZM18.3958 29.7982L14.5643 22.0569L10.8676 29.7797H7.26473L12.5669 19.8767L7.44044 9.86288H11.18L14.8094 17.4749L18.4085 9.84439H21.9188L16.7881 19.5626L22.2217 29.7982H18.3958ZM34.8231 28.9852C33.2401 29.7243 31.5816 30.0569 29.9986 30.0569C25.9093 30.0753 22.9883 27.5996 22.9883 22.5742C23.1214 17.4261 26.6202 14.5535 31.5251 14.9437V9.86288H34.8796V26.9714C34.8865 29.0118 35.1162 28.8156 34.8231 28.9852ZM31.5251 17.8444V26.9898C28.2141 27.8322 26.3834 25.8567 26.3992 22.4263C26.4117 18.9083 28.7693 17.0825 31.5251 17.8444Z"} />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <br />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <br />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <Icon className="icon" />
                        <br />
                    </div>
                    <div className="photo">
                        <img src="src/resources/profile.png" alt="" />
                    </div>
                    <div className="text_desc">
                        <p>My name is Gabriel, im a Software engineer student from México and i do Web development on my free time, i’m also a self taught UI and Web designer.</p>
                    </div>
                </div>
            </section>

            <section className="carousel">
                <div className="container"> </div>
            </section>
        </div>
    )
}

export default Content
