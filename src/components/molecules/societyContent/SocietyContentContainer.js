import React, { Component } from 'react'
// import { TweenMax, Power1, TimelineLite, TweenLite } from "gsap/TweenMax";
import MonksContent from './MonksContent';

import "./societyContentContainer.css";
import MonksIntro from '../intros/MonksIntro';
export default class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        this.scrollTime = 1.2;
        this.scrollDistance = 170;
    }

    scroll(event) {

        console.log(event);
        
        // const $window = window;
        // var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        // var scrollTop = $window.scrollTop();
        // var finalScroll = scrollTop - parseInt(delta * this.scrollDistance);

        // TweenMax.to($window, this.scrollTime, {
        //     scrollTo: { y: finalScroll, autoKill: true },
        //     ease: Power1.easeOut,
        //     overwrite: 5
        // });
    }
    render() {
        return (
            <div className="societyContentContainer" onScroll={(e) => this.scroll(e)}>
                <a href='!'>Retour à l'acceuil</a>
                <MonksIntro />
                <MonksContent />
            </div>
        )
    }
}
