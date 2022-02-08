import React, { useState } from 'react'
import Button from './Button'
import './sCarousel.sass'
import 'animate.css';


const CCarousel = ({items, time = 1000}) => {
  
  const [count, setCount] = useState(0)

  setTimeout(() => {
    count <= items.length -2 ? setCount(count +1) : setCount(0) //why it has to be -2?     
  }, time);

  return (
      <div className="carousel">
          <div className="data">
          <h1>{items[count].name}</h1>
          <p>{items[count].dscription}</p>
              <div className="c-buttons">
                  <Button message={"more"} icon={"plus"} size="small"/>
                  <Button state={items[count].status ? "" : "deactivated"} message={"working demo"} icon={"open"} size="small" link={items[count].status && items[count].link}/>
                  <Button message={"previous"} icon={"chevron-left"} lean={"left"} size="small" />
                  <Button message={"next proyect"} icon={"chevron-right"} size="small"/>
              </div>          
          </div>
          <div className='image-container'>
            <p>{items[count].id} / {items.length}</p>
            <img src={items[count].image} alt="" />
          </div>
      </div>
          
  )
}

export default CCarousel
