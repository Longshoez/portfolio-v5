import React from 'react'
import Button from './Button'
import './sAbout.sass'
import AboutDynamicCounter from './ADynamicCounters'
import Icon from './Icon'
import { isMobile } from 'react-device-detect'
import './responsiveMobile.sass'

const AboutBioCard = (props) => {

    const aboutDefault = "aboutBio"
    const bioCardDefault = "bioCard"  
    const aboutImageDefault = "aboutImage"      

    return (
        <>
            <div className={isMobile ? `${aboutDefault}` : `${aboutDefault}`}>
                <div className={isMobile ? `${bioCardDefault}` : `${bioCardDefault}`}>
                    <div className={isMobile ? `${aboutImageDefault}` : `${aboutImageDefault}`}>
                        <img src={props.pic} alt="" />
                    </div>
                    <div>
                        <h1>{props.head} </h1>
                        <p>{props.bio}</p>
                        <Button message={props.btnTxt} icon={props.btnIcon} size="small" />
                    </div>
                </div>
                <div className="dynamicCounterContainer">
                    <AboutDynamicCounter count="5" label="Colaborations" />
                    <AboutDynamicCounter count="25" label="Designs" />
                    <AboutDynamicCounter count="5" label="Websites" />
                    <AboutDynamicCounter count="1" label="App" />
                    <AboutDynamicCounter count="1y+" label="Experience" />
                    <AboutDynamicCounter count="2" label="Live projects" />
                </div>
                <div>
                    <h1>Tech i use on my projects</h1>
                    <div className="techOnProjects">
                        <Icon icon="HTML" />
                        <Icon icon="CSS" />
                        <Icon icon="JS" />
                        <Icon icon="React" />
                        <Icon icon="Emmet" />
                        <Icon icon="Sass" />
                        <Icon icon="Github" />
                        <Icon icon="Firebase" />
                    </div>
                    <div className="techOnProjects">
                        <Icon icon="Bootstrap" />
                        <Icon icon="Figma" />
                        <Icon icon="Blender" />
                        <Icon icon="Wordpress" />
                        <Icon icon="Java" />
                        <Icon icon="Electron" />
                        <Icon icon="Spark ar" />
                        <Icon icon="Adobe XD" />
                        <Icon icon="Photoshop" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBioCard
