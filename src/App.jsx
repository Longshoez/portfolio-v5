import React from 'react'
import './App.sass'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Button from './Components/Button'
import './Components/sBackground.sass'
import './Components/sAbout.sass'
import './Components/sNavigationBar.sass'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <section className="section mainContent">
        <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>
        {/* 🎨 💻 🚀*/}
        <Button message="Get in touch!" icon="envelope" />
      </section>
      <Background></Background>
    </div>
  )
}

export default App
