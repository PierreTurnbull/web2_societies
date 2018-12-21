import React from 'react'

import "./image.css"
export default function Image(props) {
    const _class = props.style;
    return (
        <div className={`societyContentImage ${_class}`} >
            {props.gradient && <div className="gradient" style={{backgroundImage: props.gradient}}></div>}
            <img src={props.src} alt={props.alt || ""} />
        </div>
    )
}
