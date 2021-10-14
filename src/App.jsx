import React from 'react'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Button from './Components/Button'
import './App.sass'
import './Components/sBackground.sass'
import './Components/sAbout.sass'
import './Components/sNavigationBar.sass'
import ABioCard from './Components/ABioCard'

function App() {



  return (
    <div className="App">
        <NavigationBar />

        <section className="section mainContent Tilt-inner" id="home">
          <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
          {/* 🎨 💻 🚀*/}
          <Button message="Get in touch!" icon="envelope" />
        </section>

        <section className="section aboutContent" id="about">
          <ABioCard
            head="Nice to meet you!"
            pic="src\resources\profile pic 2.jpg"
            bio="My name is Gabriel, im a Software engineer student from México and i do Web development on my free time, i’m also a self taught UI and Web designer."
            btnTxt="More"
            btnIcon="plus"
          />
        </section>

        <section className="section aboutContent" id="work">
          <Button message="Carousel" />
        </section>

        <section className="section aboutContent" id="contact">
          <Button message="Full screen footer" />
        </section>

        <Background />
    </div>
  )
}

export default App
