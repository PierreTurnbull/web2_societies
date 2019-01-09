import React, { Component } from 'react'
import TimerBar from './TimerBar'
import { TweenMax, TweenLite, Expo } from "gsap/TweenMax";

import "./timerBarContainer.css"
export default class TimerBarContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            storyIndex: 0
        }

        this.timer = 0;

        this.timerAnimation = TweenLite.to(this, 5, {
            timer: 5,
            paused: true,
            onUpdate: () => { this.setState({ timer: this.timer }) },
            onComplete: () => { this.nextStoryBar() }
            // ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0.326 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
        });
    }

    componentDidMount() {
        // this.startTimer = setInterval(() => {
        //     this.timer += 1
        //     console.log(this.timer);
        //     // clearInterval(this.startTimer)
        //     this.timer >= 5 && clearInterval(this.startTimer);
        // }, 1000);
        this.timerAnimation.play();
    }

    nextStoryBar = () => {
        this.props.onComplete();
        let storyIndex = this.state.storyIndex + 1
        this.setState({ storyIndex: storyIndex });

        if (this.state.storyIndex > 2) {
            this.setState({ storyIndex: 0 });
        }

        this.timer = 0;
        this.setState({ timer: 0 });
        this.timerAnimation = TweenLite.to(this, 5, {
            timer: 5,
            delay: 2,
            onUpdate: () => { this.setState({ timer: this.timer }) },
            onComplete: () => { this.nextStoryBar() }
            // ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0.326 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
        });
    }

    // componentDidUpdate() {
    //     this.state.timer > 5 && this.stopTimer()
    // }

    stopTimer = () => {
        clearInterval(this.startTimer())
    }

    render() {
        return (
            <div className="timerBarContainer">
                <TimerBar progress={this.state.storyIndex === 0 && this.state.timer} completed={this.state.storyIndex > 0} />
                <TimerBar progress={this.state.storyIndex === 1 && this.state.timer} completed={this.state.storyIndex > 1} />
                <TimerBar progress={this.state.storyIndex === 2 && this.state.timer} completed={this.state.storyIndex > 2} />
            </div>
        )
    }
}
