import React, { Component } from 'react'
import CircleCta from './CircleCta';
import { TweenLite, Expo } from "gsap/TweenMax";
import CursorContainer from '../cursor/CursorContainer';

export default class CircleCtaContainer extends Component {

    state = {
        holdValue: 0
    }

    constructor(props) {
        super(props);

        this.holdProgess = 0;
        this.holdAnimation = TweenLite.to(this, 1.5, {
            holdProgess: 100,
            paused: true,
            onUpdate: () => { this.setState({ holdProgess: this.holdProgess }) },
            ease: Expo.easeOut
        });
    }

    reverseAnimation = () => {
        this.holdAnimation.reverse();
    }

    render() {
        return (
            <div onMouseEnter={() => {
                document.getElementsByClassName('cursor')[0].classList.toggle('bigCursor')
            }}
                onMouseLeave={() => {
                    document.getElementsByClassName('cursor')[0].classList.toggle('bigCursor')
                }}
            >
                <CircleCta
                    onMouseDown={() => {
                        console.log("ge");
                        this.holdAnimation.play();
                    }}
                    onTouchStart={() => {
                        this.props.holdAnimation.play();
                    }}
                    onMouseUp={() => {
                        this.reverseAnimation()
                    }}
                    onTouchEnd={() => {
                        this.reverseAnimation()
                    }}
                    onMouseLeave={() => this.reverseAnimation()}

                    holdProgess={this.state.holdProgess}

                    style={{ background: `rgba(255, 255, 255, ${this.state.holdProgess / 100}` }}
                />
                {/* <CursorContainer cursorPosition={this.props.position || { x: 10, y: 10 } } /> */}

            </div>
        )
    }
}
