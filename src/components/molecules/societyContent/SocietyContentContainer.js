import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

import "./societyContentContainer.css";
import { throttle, debounce } from 'lodash';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap/TweenMax";

// import JarawaIntro from '../intros/JarawaIntro';
class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()

        this.scroller = {
            target: this.societyContainer
        };
    };

    handleScroll = throttle((event) => {
        TweenMax.to(this, Math.abs(event.deltaY / 100), {
            scrollY: event.deltaY,
            ease: Power2.easeOut,
            autoKill: true
        });
    }, 0);

    setBack = debounce((event) => {
        TweenMax.to(this, Math.abs(event.deltaY / 200), {
            scrollY: event.deltaY / 200,
            ease: Power2.easeOut,
            autoKill: true,
            onUpdate: () => this.updateScroll()
        });
    }, 0);


    updateScroll = () => {
        this.scroller.target.current.scrollTop = this.scroller.target.current.scrollTop + this.scrollY;
    }

    render() {

        return (
            <div
                className="societyContentContainer"
                onWheel={(e) => { e.persist(); e.preventDefault(); this.handleScroll(e); this.setBack(e) }}
                ref={this.societyContainer}>
                <Link to="/">- Retour à l'acceuil</Link>
                {
                    this.props.societyIntro
                }
                {
                    this.props.societyContent
                }
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)