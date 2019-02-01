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
        this.societyContentList = {
            monks: MonksContent,
            jarawa: JarawaContent
        }
        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()


        this.state = {
            scrollValue: 0
        }
        this.currentPixel = window.pageYOffset;

    }

    onScroll = (e) => {
        let offset = window.pageYOffset;
        const diff = offset - this.currentPixel;
        const speed = diff * .25;
        console.log(speed);

        let updateValue = TweenLite.to(this, .5, {
            scrollValue: speed,
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
        const { society } = this.props;
        const DynSocietyContent = this.societyContentList[society];

        return (
            <div
                // onScroll={this.onScroll}
                className="societyContentContainer"
                onWheel={(e) => { e.persist(); this.onScroll(e) }}
                ref={this.societyContainer}>
                <p onClick={() => this.props.history.goBack()}>Retour à l'acceuil</p>
                <DynSocietyContent scrollValue={this.state.scrollValue} />
                {/* <MonksContent scrollValue={this.state.scrollValue} />
                <JarawaContent scrollValue={this.state.scrollValue} /> */}
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)