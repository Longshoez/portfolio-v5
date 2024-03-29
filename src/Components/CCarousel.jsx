import React, { useState, useEffect } from 'react'
import Button from './Button'
import './sCarousel.sass'
import './animating.css';

const CCarousel = ({ items, time = 1000 }) => {

  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(time)
  const [animationTimer, setAnimationTimer] = useState(time / 2)
  const [animating, setAnimating] = useState(false)

  setTimeout(() => {
    count <= items.length - 2 ? (setCount(count + 1)) : (setCount(0)) //why it has to be -2?        
  }, time);


  useEffect(() => {
    setAnimating(!animating)
    console.log(count, animating)
  }, [count])

  //make a timer and set animating to true if time == 0 then to false quickly so it launches only one time
  //i need the variable animating to be changing, true when the data changes and false before it leaves, so before the time goes to 0

  return (
    <div className="carousel">
      <div className="data">
        <h1 className={animating ? "slide" : ''}>{items[count].name}</h1>
        <p className={animating ? "slide" : ''}>{items[count].dscription}</p>
        <div className="c-buttons">
          <Button message={"more"} icon={"plus"} size="small" />
          <Button state={items[count].status ? "" : "deactivated"} message={items[count].status ? "Working demo" : "not available"} icon={"open"} size="small" link={items[count].status && items[count].link} />
          <Button message={"previous"} icon={"chevron-left"} lean={"left"} size="small" />
          <Button message={"next project"} icon={"chevron-right"} size="small" />
        </div>
      </div>
      <div className={animating ? "slide image-container" : 'image-container'}>
        <img src={items[count].image} alt="" />
      </div>
    </div>

  )
}

export default CCarousel
