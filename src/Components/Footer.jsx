import React from 'react'
import Icon from './Icon'
import './footer.sass'

const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <h1>Social <br />networks</h1>
                <div className="icons">
                    <Icon icon="Dribbble" tooltip="Dribble" link="https://dribbble.com/gabrielll"/>
                    <Icon icon="Twitter" tooltip="Dribble" link="https://twitter.com/yorqk" />
                    <Icon icon="Instagram" tooltip="Dribble" link="https://www.instagram.com/g43ri3l"/>
                    <Icon icon="Github" tooltip="Github" link="https://github.com/Longshoez"/>
                    <Icon icon="Linkedin" tooltip="Linkedin" link="https://www.linkedin.com/in/devgabs" /> {/*has tooltip? tooltip != "" , tooltipText={props.tooltip} */}
                </div>
                <div className="icons">
                    <Icon icon="Youtube" tooltip="Youtube" link="https://www.youtube.com/channel/UC9CmAPTsstaDQ203AsQPJCw"/>
                    <Icon icon="Soundcloud" tooltip="Sonudcloud" />                    
                </div>
            </div>

            <div className="contact">
                <h1>Contact <br /> information</h1>
                <a href="tel:3121196xxx">3121196xxx</a>
                <a href="mailto:gabrielalejandro.br99@gmail.com?subject=I'd like to schedule a meeting&body=First we'd like for you to tell us about you or your project">gabrielalejandro.br99@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer
