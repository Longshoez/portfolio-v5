import React from 'react'
import Button from './Button'
import './sAbout.sass'

const BioCard = (props) => {
    return (
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
    )
}

export default BioCard
