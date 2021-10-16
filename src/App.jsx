import React from 'react'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Button from './Components/Button'
import './App.sass'
import './Components/sBackground.sass'
import './Components/sAbout.sass'
import './Components/sNavigationBar.sass'
import ABioCard from './Components/ABioCard'
import CCarousel from './Components/CCarousel'
import Footer from './Components/Footer'

import pic from './resources/profile-pic.jpg'

function App() {



  return (
    <div className="App">
        <NavigationBar />

        <section className="section mainContent Tilt-inner" id="home">
          <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
          {/* 🎨 💻 🚀*/}
          <Button message="Get in touch!" icon="envelope" link="mailto:gabrielalejandro.br99@gmail.com?subject=I'd like to schedule a meeting&body=First we'd like for you to tell us about you or your project"/>
        </section>

        <section className="section aboutContent" id="about">
          <ABioCard
            head="Nice to meet you!"
            pic={pic}
            bio="My name is Gabriel, im a Software engineer student from México and i do Web development on my free time, i’m also a self taught UI and Web designer."
            btnTxt="More"
            btnIcon="plus"
            />
        </section>

        <section className="section aboutContent" id="work">
          <CCarousel></CCarousel>
        </section>

        <section className="section aboutContent" id="contact">
          <Footer></Footer>
        </section>

        <Background></Background>
    </div>
  )
}

export default App
