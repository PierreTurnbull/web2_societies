import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import Vote from './Vote';
import Quote from '../../atomes/Quote/Quote';

import './voteContainer.sass';
import { TweenLite } from 'gsap/TweenMax';
export default class VoteContainer extends Component {
    constructor(props) {
        super(props);
        this.voteContainerRef = React.createRef();
        this.state = {
            isVisible: false
        }
    }

    onVisibilityChange = (isVisible) => {
        this.setState({
            isVisible
        });

        this.anim = isVisible && TweenLite.fromTo(this.voteContainerRef.current, .5,
            { y: 100, opacity: 0, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
            { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        );
    }

    render() {
        return (
            <VisibilitySensor
                onChange={this.state.isVisible === false && this.onVisibilityChange}
                // offset={{ top: -200 }}
                ref={this.voteContainerRef}
            >
                <div className="voteContainer">
                    <hr />
                    <Quote variant="question" text={this.props.question} />
                    <Vote onVote={(answer) => this.onVote(answer)} />
                    <hr />
                </div>
            </VisibilitySensor>
        )
    }
}
