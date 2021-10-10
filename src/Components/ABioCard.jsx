import React from 'react'
import Button from './Button'
import './sAbout.sass'
import AboutDynamicCounter from './ADynamicCounters'

const AboutBioCard = (props) => {
    return (
        <>
            <div className="bioCard">
                <div className="aboutImage">
                    <img src={props.pic} alt="" />
                </div>
                <div>
                    <h1>{props.head} </h1>
                    <p>{props.bio}</p>
                    <Button message={props.btnTxt} icon={props.btnIcon} size="small"/>
                </div>
            </div>
            <div className="dynamicCounterContainer">
                <AboutDynamicCounter count="5" label="Colaborations"/>
                <AboutDynamicCounter count="25" label="Designs"/>
                <AboutDynamicCounter count="5" label="Websites"/>
                <AboutDynamicCounter count="1" label="App"/>
                <AboutDynamicCounter count="1y+" label="Experience"/>
                <AboutDynamicCounter count="2" label="Live projects"/>
            </div>
            <div className="techOnProjects">
                <h1>Tech i use on my projects</h1>
                <Icon />
            </div>
        </>
    )
}

export default AboutBioCard
