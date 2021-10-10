import React from 'react'

const Blobs = (props) => {
    return (
        <svg className="Blob" viewBox="0 0 1065 589" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d={props.path}/>
        </svg>
    )
}

export default Blobs
