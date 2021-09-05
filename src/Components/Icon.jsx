import React from 'react'

const Icon = (props) => {
    return (
        <svg className="icon" width={props.width} height={props.height} viewBox="0 0 1065 589" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d={props.path} fill="white" />
        </svg>
    )
}

export default Icon
