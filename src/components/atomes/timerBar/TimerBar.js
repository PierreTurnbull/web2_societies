import React from 'react'

import "./timerBar.css"
const TimerBar = (props) => {
    const { progress, completed } = props;
    return (
        <div className="timerBar">
            <div className="timerBarInactive"></div>
            <div className="timerBarProgress" style={{ width: `${completed ? 100 : progress * 100 / 5}%` }}></div>
        </div>
    )
}

export default TimerBar
