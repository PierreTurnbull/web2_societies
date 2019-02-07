import React, { Component } from 'react'
import CircleCta from './CircleCta';
import { TweenLite, Expo } from "gsap/TweenMax";
import { withRouter } from "react-router-dom";
import { compose } from 'recompose';
import { withCursorContext } from '../../../contexts/cursor/cursor.context';

import "./circleCtaContainer.css";
class CircleCtaContainer extends Component {

    state = {
        holdValue: 0
    }

    constructor(props) {
        super(props);

        this.circleRef = React.createRef();

        this.holdProgess = 0;
        this.holdAnimation = TweenLite.to(this, 1.5, {
            holdProgess: 100,
            paused: true,
            onUpdate: () => { this.setState({ holdProgess: this.holdProgess }) },
            onComplete: () => { this.props.history.push(this.props.path) },
            ease: Expo.easeOut
        });
    }

    reverseAnimation = () => {
        this.holdAnimation.reverse();
    }

    render() {
        return (
            <div
                onMouseEnter={() => {
                    this.props.cursor_context.state.hoverHandler(this.circleRef.current, "HOLD");
                    // this.setState({ isHover: true });
                }}
                onMouseLeave={() => {
                    this.props.cursor_context.state.hoverHandler();
                    // this.setState({ isHover: false });
                }}
                ref={this.circleRef}
                style={{ cursor: "none" }}
            // className={this.state.isHover ? 'hide' : ''}
            >
                <CircleCta
                    onMouseDown={() => {
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

export default compose(withRouter, withCursorContext)(CircleCtaContainer)