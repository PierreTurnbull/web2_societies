import React from 'react'

import "./circleCta.css"
const CircleCta = (props) => {
    return (
        <div
            className="circleCta"
            onMouseDown={() => {
                props.onMouseDown();
            }}
            onTouchStart={() => {
                props.onTouchStart();
            }}
            onMouseUp={() => {
                props.onMouseUp()
            }}
            onTouchEnd={() => {
                props.onTouchEnd()
            }}
            onMouseLeave={() => props.onMouseLeave()}

            style={{ ...props.style }}
        >
            Discover
    </div>
    )
}

export default CircleCta
