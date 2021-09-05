import React from 'react'

const Blobs = (props) => {
    return (
        <svg className="Blob" viewBox="0 0 1065 589" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d={props.path} fill="white" />
        </svg>
    )
}

export default Blobs
