import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import ImageMonks from "images/moines.jpg"
import ImageJarawa from "images/jarawa.jpg"
import ImageRasta from "images/rastaa.jpeg"
import Background2 from "images/rasta.jpg"
import arrowLeftIcon from 'images/icons/arrow.svg';
import { withRouter } from "react-router";
import Scene from "components/atomes/Scene/Scene.js"
import { TweenLite } from "gsap/TweenMax";

import "./thumbnailContainer.css"
import ArrowIconContainer from '../../atomes/arrowIcon/ArrowIconContainer';
// import Cursor from '../../atomes/cursor/Cursor';
class ThumbnailContainer extends Component {
    state = {
        redirect: false
    }

    constructor(props) {
        super(props);
        this.scene1 = React.createRef();
        this.scene2 = React.createRef();
        this.scene3 = React.createRef();

        this.holdValue = 0.0;
        this.animation = TweenLite.to(this, 1.5, {
            holdValue: 100,
            paused: true,
            onUpdate: this.incrementHoldValue,
            onComplete: this.onHoldComplete,
            ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0.326 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
        });
    }

    // componentDidMount() {
    //     console.log(this.scene1.current.scene.current);
    // }
    redirectTo = (path) => {
        this.setState({ redirect: true });
        setTimeout(() => {
            this.props.history.push(path);
            this.setState({ redirect: false });
        }, 1000);
    }

    incrementHoldValue = () => {
        this.setState({ holdValue: this.holdValue })
    }

    reverseAnimation = () => {
        !this.state.isHoldComplete && this.animation.reverse();
    }

    onHoldComplete = () => {
        console.log("colmelpf");
        this.setState({ isHoldComplete: true })
        this.redirectTo(this.props.society);

        setTimeout(() => { // reset holdValue value animation
            this.setState({ isHoldComplete: false })
            this.animation.reverse();
        }, 1000);
        // this.animation.pause();
        // TweenLite.to(this, 1, { holdValue: 100, paused: true, onUpdate: this.incrementHoldValue });
    }

    render() {
        const gradientMonks = "linear-gradient(to right, rgba(87, 18, 0, 0.2), rgba(87, 18, 0, 0.4))";
        const gradientJarawa = "linear-gradient(to right, rgba(146, 154, 63, 0.2), rgba(146, 154, 63, 0.4))";
        const gradientRasta = "linear-gradient(to right, rgba(63, 154, 146, 0.2), rgba(63, 154, 146, 0.4))";
        return (
            <div className="thumbnailContainer">
                <div className={`${this.state.redirect === true ? 'overlay slideIn' : 'overlay'}`}>
                </div>
                <Thumbnail
                    key={1}
                    society="monks"
                    background={ImageMonks}
                    background2={Background2}
                    title="Les moines du Mont Athos"
                    name="1"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene1}
                    canvas={true}
                    gradient={gradientMonks}
                    onComplete={(path) => this.redirectTo(path)}
                    animation={this.animation}
                    holdValue={this.holdValue}
                    reverseAnimation={this.reverseAnimation}
                />
                <Thumbnail
                    key={2}
                    society="jarawa"
                    background={ImageJarawa}
                    background2={Background2}
                    title="Les Jarawas des Andaman"
                    name="2"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene2}
                    canvas={true}
                    gradient={gradientJarawa}
                    onComplete={(path) => this.redirectTo(path)}
                    animation={this.animation}
                    holdValue={this.holdValue}
                    reverseAnimation={this.reverseAnimation}
                />
                <Thumbnail
                    key={3}
                    society="rasta"
                    background={ImageRasta}
                    background2={Background2}
                    title="Les rastas de Jamaïque"
                    name="3"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene3}
                    canvas={true}
                    gradient={gradientRasta}
                    onComplete={(path) => this.redirectTo(path)}
                    animation={this.animation}
                    holdValue={this.holdValue}
                    reverseAnimation={this.reverseAnimation}
                />
                <Scene
                    img1={ImageMonks}
                    img2={ImageJarawa}
                    img3={ImageRasta}

                    // className="thumbnailCanvas"
                    scene1={this.scene1}
                    scene2={this.scene2}
                    scene3={this.scene3}

                    background2={ImageJarawa}
                    className="thumbnailCanvas"
                    name={this.props.name}
                    holdValue={this.holdValue}
                />
            </div>
        )
    }
}

export default withRouter(ThumbnailContainer);