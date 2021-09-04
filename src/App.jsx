import React from 'react'
import './App.sass'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Home from './Components/Home'

function App() {

  return (
    <div className="App">
      <Home />
      <Background />
    {/* svg here */}
    </div>
  )
}

export default App