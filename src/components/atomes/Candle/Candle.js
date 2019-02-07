import React from 'react'

import './candle.css'
export default function Candle(props) {
    return (
        //<div className="candleContent" style={props.style}>
            <div className="handler" style={props.style}>
                <div className="candle">
                    <div className="blinking-glow"></div>
                    <div className="thread"></div>
                    <div className="glow"></div>
                    <div className="flame"></div>
                </div>
            </div>
        //</div>
    )
}
