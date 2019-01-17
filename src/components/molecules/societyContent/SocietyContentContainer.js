import React, { Component } from 'react'
import { withRouter } from 'react-router'

import "./societyContentContainer.css";
// import JarawaIntro from '../intros/JarawaIntro';
class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        // this.handleScroll = this.handleScroll.bind(this)
        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()

        this.scroller = {
            target: this.societyContainer,
            ease: 0.05, // <= scroll speed
            endY: 0,
            y: 0,
            resizeRequest: 1,
            scrollRequest: 0,
        };
    }

    // handleScroll = throttle((event) => {
    //     event.persist()
    //     // TweenMax.to(this, 1, {
    //     //     scrollY: event.deltaY / 10,
    //     //     ease:Power2.easeOut,
    //     //     onUpdate: () => this.updateScroll()
    //     // });
    // }, 100)

    updateScroll = () => {
        // console.log(this.scrollY, this.scroller.target.current.scrollTop);
        // window.scrollTo({top: window.pageYOffset + this.scrollY});
        this.scroller.target.current.scrollTop = this.scroller.target.current.scrollTop + this.scrollY;
    }

    render() {
        
        return (
            <div
                className="societyContentContainer"
                // onWheel={(e) => { e.persist(); this.handleScroll(e) }} 
                ref={this.societyContainer}>
                <p onClick={() => this.props.history.goBack()}>Retour à l'acceuil</p>
                {/* {
                    this.props.societyIntro
                } */}
                {
                    this.props.societyContent
                }
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)