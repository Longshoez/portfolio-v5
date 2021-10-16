import React from 'react'
import './ADynamicCounters.sass'

const AboutDynamicCounters = (props) => {
    
    return (
        <div className="dynamicCounters">
            <h1>{props.count}</h1>
            <p>{props.label}</p>
        </div>
    )
}

export default AboutDynamicCounters
