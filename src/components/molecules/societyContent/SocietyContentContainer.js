import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

import "./societyContentContainer.css";
import { throttle, debounce } from 'lodash';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap/TweenMax";
import Scrollbar from 'react-smooth-scrollbar';

// import JarawaIntro from '../intros/JarawaIntro';
class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()

        this.scroller = {
            target: this.societyContainer
        };
    };

    render() {
        return (
            <div
                className="societyContentContainer"
            >

                <Scrollbar
                    damping={.05}
                    className="scrollContent"
                    thumbMinSize={40}
                >
                    {/* <div
                    // className="societyContentContainer"
                    // onWheel={(e) => { e.persist(); this.handleScroll(e); this.setBack(e); }}
                ref={this.societyContainer}> */}
                    <Link to="/">- Retour à l'acceuil</Link>
                    {
                        this.props.societyIntro
                    }
                    {
                        this.props.societyContent
                    }
                    {/* </div> */}
                </Scrollbar>
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)