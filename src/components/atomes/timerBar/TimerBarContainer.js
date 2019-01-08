import React, { Component } from 'react'
import TimerBar from './TimerBar'

import "./timerBarContainer.css"
export default class TimerBarContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    componentDidUpdate() {
        this.state.timer > 5 && this.stopTimer()
    }

    startTimer = setInterval(() => {
        let t = this.state.timer
        t++
        console.log(t);
    }, 1000);

    stopTimer = () => {
        clearInterval(this.startTimer())
    }

    render() {
        return (
            <div className="timerBarContainer">
                <TimerBar />
                <TimerBar />
                <TimerBar />
            </div>
        )
    }
}
