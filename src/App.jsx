import React, {useEffect} from 'react'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Background'
import Button from './Components/Button'
import ABioCard from './Components/ABioCard'
import CCarousel from './Components/CCarousel'
import Footer from './Components/Footer'
import './App.sass'
import './Components/sBackground.sass'
import './Components/sAbout.sass'
import './Components/sNavigationBar.sass'
import './Components/responsiveMobile.sass'
import projects from './projects'

import pic from './resources/profile-pic.jpg'
import Icon from './Components/Icon'
import { isMobile, MobileView } from 'react-device-detect'

function App() {    

  useEffect(()=>{
    console.log("https://fontawesome.com/license")
    console.log(isMobile)
    // isMobile ? alert("This is a work in progress") : null
    alert("This website is still a work in progress, mobile version isnt't working and some links might not work as intended.")
  }, []) 

  const defaultStyle1 = "section mainContent"
  const defaultStyle2 = "section aboutContent"  

  return (    

    <div className="App">

        <div className='content'>
        <NavigationBar />

        <section className={isMobile ? `mobileSections ${defaultStyle1}` : `${defaultStyle1}`} id="home">

        {isMobile ? (
          <h1>I design, code, <br />launch Websites <br /> and apps, amongst other things.</h1>            
        ) : (
          <h1>I design, code and <br /> launch Websites and <br /> apps, amongst other <br />things.</h1>            
        )}           
          
          <Button message="Get in touch!" icon="envelope" link="mailto:gabrielalejandro.br99@gmail.com?subject=I'd like to schedule a meeting&body=First we'd like for you to tell us about you or your project"/>
          <MobileView>                                                
            <div style={{listStyle: 'none'}} className='arrowDown' href="#about">
              <Icon icon="Arrow Down" tooltip="Read More" link="" hasBorder={false}/>              
            </div>
          </MobileView>

        </section>

        <section className={isMobile ? `mobileSections ${defaultStyle2}` : `${defaultStyle2}`} id="about">
          <ABioCard
            head="Nice to meet you!"
            pic={pic}
            bio="My name is Gabriel, im a Software engineer student from México and i do Web development on my free time, i’m also a self taught UI and Web designer."
            btnTxt="More"
            btnIcon="plus"
            />
        </section>

        <section className={isMobile ? `mobileSections ${defaultStyle2}` : `${defaultStyle2}`} id="work">
          <CCarousel items={projects} time={15000} />
        </section>

        <section className={isMobile ? `mobileSections ${defaultStyle2}` : `${defaultStyle2}`} id="contact">
          <Footer></Footer>
        </section>
        </div>

        <Background></Background>
    </div>
  )
}

export default App
