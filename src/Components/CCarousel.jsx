import React from 'react'
import Button from './Button'
import './sCarousel.sass'
import barbershop from '../resources/carousel-pics/barbershop.png'

const CCarousel = () => {
    return (
        <div className="carousel">
            <div className="data">
            <h1>Mende’z Barbershop</h1>
            <p>I designed the website for a local barbershop, where they could showcase their services, the bigger picture was to develop an appointment system that would double as an ecomerce solution...</p>
                <div className="c-buttons">
                    <Button message={"more"} icon={"plus"} size="small"/>
                    <Button message={"working demo"} icon={"open"} size="small" link="https://barbershop-git-designgabriel-edsen.vercel.app/" />
                    <Button message={"previous"} icon={"chevron-left"} lean={"left"} size="small" />
                    <Button message={"next proyect"} icon={"chevron-right"} size="small" />
                </div>
            </div>
            <img src={barbershop} alt="" />
        </div>
            
    )
}

export default CCarousel
