import React from 'react'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Button from './Components/Button'
import './App.sass'
import './Components/sBackground.sass'
import './Components/sAbout.sass'
import './Components/sNavigationBar.sass'
import BioCard from './Components/BioCard'

function App() {



  return (
    <div className="App">
      <NavigationBar />

      <section className="section mainContent">
        <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
        {/* 🎨 💻 🚀*/}
        <Button message="Get in touch!" icon="envelope" />
      </section>

      <section className="section mainContent">        
        <BioCard
          head="Nice to meet you!"
          pic="src\resources\profile pic 2.jpg"
          bio="My name is Gabriel, im a Software engineer student from México and i do Web development on my free time, i’m also a self taught UI and Web designer."
          btnTxt="More"
          btnIcon="plus"
        />
      </section>

      <Background />
    </div>
  )
}

export default App
