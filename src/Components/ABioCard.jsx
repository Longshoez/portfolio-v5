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
                    <Button message={props.btnTxt} icon={props.btnIcon} />
                </div>
            </div>
            <div>
                <AboutDynamicCounter 
                    count="2"
                    label="Colaborations"
                />
            </div>
        </>
    )
}

export default AboutBioCard
