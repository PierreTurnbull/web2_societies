import React, { Component } from 'react'
import { withRouter } from 'react-router'
import scrollSpeed from 'utils/scrollSpeed';
import { TweenMax, TweenLite, Expo } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import "./societyContentContainer.css";
import MonksContent from './MonksContent';
import JarawaContent from './JarawaContent';
// import JarawaIntro from '../intros/JarawaIntro';
class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        // this.handleScroll = this.handleScroll.bind(this)
        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()


        this.state = {
            scrollValue: 0
        }

    }

    onScroll = (e) => {
        let offset = e.target.scrollTop / 100;
        offset = offset > 30 ? 5 : offset;
        offset = offset < -30 ? -5 : offset;
        let animationTime = offset / 2;
        console.log(offset, animationTime);

        let updateValue = TweenLite.to(this, .5, {
            scrollValue: offset / 3,
            paused: true,
            onUpdate: () => { this.setState({ scrollValue: this.scrollValue }) },
            ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0526 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
        });

        let resetValue = debounce(() => {
            TweenLite.to(this, .5, {
                scrollValue: 0,
                onUpdate: () => { this.setState({ scrollValue: this.scrollValue }) },
                ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0526 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
            });
        }, 0);

        updateValue.play();
        resetValue();
    }

    render() {
        return (
            <div
                onScroll={this.onScroll}
                className="societyContentContainer"
                // onWheel={(e) => { e.persist(); this.handleScroll(e) }} 
                ref={this.societyContainer}>
                <p onClick={() => this.props.history.goBack()}>Retour à l'acceuil</p>
                <MonksContent scrollValue={this.state.scrollValue} />
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)