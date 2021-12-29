import React from 'react'
import { isMobile } from 'react-device-detect'
import '../Components/sButton.sass'
import '../Components/responsiveMobile.sass'

const Button = (props) => {

    let iconLean = props.lean

    const renderIcon = () => {
        switch (props.icon) {
            case "chevron-right":
                return (
                    <svg viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.31549 2.09968L10.4705 9.50013L2.31549 16.73" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                )
                break;
            case "chevron-left":
                return (
                    <svg style={{ transform: "scaleX(-1)" }} viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.31549 2.09968L10.4705 9.50013L2.31549 16.73" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>)
                break;
            case "envelope":
                return (
                    <svg viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.72595 1.15381L10.4607 7.92284L18.994 1.15381M1.72595 1.15381V15.0808H18.994V1.15381M1.72595 1.15381H18.994" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                )
                break;
            case "open":
                return (
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00916 1.3717H13.5302C14.0824 1.3717 14.5302 1.81942 14.5302 2.3717V6.504M10.5986 6.11521V13.7481C10.5986 14.3004 10.1509 14.7481 9.59861 14.7481H2.02209C1.46981 14.7481 1.02209 14.3004 1.02209 13.7481V6.11521C1.02209 5.56293 1.46981 5.11521 2.0221 5.11521H9.59861C10.1509 5.11521 10.5986 5.56293 10.5986 6.11521Z" />
                    </svg>
                )
                break;
            case "plus":
                return (
                    <svg viewBox="0 -2.5 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.91943 1.06488V5.57903V10.3679" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                        <path d="M1.26807 5.71637H5.78222H10.571" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                )
                break;
            default:
                return (
                    <svg viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.31549 2.09968L10.4705 9.50013L2.31549 16.73" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                )
                break;
        }
    }

    const openLink = (e) =>{
        e.preventDefault(); //prevents the origin page to load for some reason        
        if (props.link) {            
            window.open(props.link)
        }else{
            console.log("Nothin to open")
        }
        
    }

    const smallBtnResponsive = `${props.size}BtnMobile`
    const defaultBtnStyle = `btn ${smallBtnResponsive}` 

    return (        

        iconLean === 'right' ? (
            <div className={isMobile ? `mobileBtn ${defaultBtnStyle}` : `${defaultBtnStyle}`} onClick={openLink}>
                <p>{props.message}</p>
                {renderIcon(props.icon)}
            </div>
        ) : (
            <div className={`btn ${props.size}`} onClick={openLink}>
                {renderIcon(props.icon)}
                <p>{props.message}</p>
            </div>
        )
    )
}

Button.defaultProps = {
    message: "A button",
    icon: "chevron-right",
    lean: "right",
    size: "",
    link: "",
}

export default Button
