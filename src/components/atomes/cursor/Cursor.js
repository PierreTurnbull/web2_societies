import React from 'react'

import './cursor.css'
function Cursor(props) {
    return (
        <div
            className="cursor"
            style={{
                top: `${props.cursorParams.y || 0}px`,
                left: `${props.cursorParams.x || 0}px`,
                width: `${props.cursorParams.width}px`,
                height: `${props.cursorParams.height}px`,
                borderRadius: `${props.cursorParams.borderRadius}%`,
                background: props.cursorParams.background && `rgba(255, 255, 255, ${props.cursorParams.background})`,
                borderWidth: props.cursorParams.borderWidth && `${props.cursorParams.borderWidth}px`,
            }}
        >
            {/* <svg 
            viewBox="0 0 500 500" 
            style={{ color: "white", margin: "0 auto", textAlign: "center"}}>
                <path id="curve" fill="black" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text>
                    <textPath fontSize="52px" startOffset='0%' xlinkHref="#curve" fill="white">
                    {props.text}lorem o^siù
                    </textPath>
                </text>
            </svg> */}
            <svg
                width="130px" height="65px" viewBox="0 0 130 65" version="1.1"
                style={{ color: "white", margin: "0 auto", textAlign: "center" }}>
                <path d="M130,65 C130,29.1014913 100.898509,0 65,0 C29.1014913,0 0,29.1014913 0,65 L130,65 Z" id="Oval" fill="transparent"></path>
                <text>
                    <textPath fontSize="14px" startOffset='0%' xlinkHref="#Oval" fill="white">
                        {props.text}
                    </textPath>
                </text>
            </svg>
            {/* <p style={{  shapeOutside: "url(#Oval)", color: "white", margin: "0 auto", textAlign: "center", transform: "translateY(calc(-100% - 8px))" }}>{props.text}</p> */}
        </div>
    )
}

export default Cursor
