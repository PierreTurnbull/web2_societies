import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { TweenLite, Expo } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import FullScreen from '../../molecules/fullScreen/FullScreen';

import Image1 from "images/1.jpg"
import Image2 from "images/2.jpeg"
import Image3 from "images/3.jpeg"
import Image4 from "images/4.png"
import Image5 from "images/5.jpeg"
import TransitionMap from "images/transtionMap.jpeg"
import JarawaImage from "images/assets/jarawa_fullscreen.jpg"
import MonksImage from "images/assets/monks_fullscreen.jpg"
import RastaImage from "images/assets/rastaa_fullscreen.jpeg"
import MainUi from '../../molecules/mainUi/MainUi';
import CursorContainer from '../../atomes/cursor/CursorContainer';
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
import { compose } from 'recompose';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            imageIndex: 0,
            isTicking: false,
            scrollProgress: 0.0
        }

        this.onWheel = this.onWheel.bind(this);
        this.setBack = this.setBack.bind(this);

        // this.images = [Image1, Image2, Image3, Image4, Image5, JarawaImage, MonksImage, RastaImage];
        this.images = [MonksImage, JarawaImage, RastaImage];
        this.projects = ["monks", "jarawa", "rasta"];
        this.progress = 0.0;
        this.scrollProgress = 0.0;

        this.props.history.listen((location, action) => {
            this.setState({ redirect: true })
            console.group("on route change");
            console.log("on route change");
            console.groupEnd()
        });

        this.animation = TweenLite.to(this, 1.5, {
            progress: 100,
            paused: true,
            onUpdate: () => { this.setState({ progress: this.progress }) },
            // ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0.326 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
            ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
            // ease: Expo.easeOut
        });
    }

    prevImage = () => {
        if (this.state.imageIndex > 0) {
            this.animation.play();
            this.animation.eventCallback('onComplete', () => {
                this.handleIndex("prev");
                this.progressComplete();
            });
        } else {
            this.animation.play();
            this.animation.eventCallback('onComplete', () => {
                this.setState({ imageIndex: Number(this.images.length - 1) });
                this.progressComplete();
            });
        }
    }

    nextImage = () => {
        if (this.images.length - 1 > this.state.imageIndex) {
            this.animation.play();
            // this.animation.onComplete = () => this.handleIndex("next");
            this.animation.eventCallback('onComplete', () => {
                this.handleIndex("next");
                this.progressComplete();
            })
        } else {
            this.animation.play();
            this.animation.eventCallback('onComplete', () => {
                this.progressComplete();
                this.setState({ imageIndex: Number(0) })
            })
        }
    }

    progressComplete = () => {
        this.animation.reverse();
        this.setState({ isTicking: false });
    }

    handleIndex = (param) => {
        param === "next"
            ? this.setState({ imageIndex: Number(this.state.imageIndex + 1) })
            : this.setState({ imageIndex: Number(this.state.imageIndex - 1) })
    }

    onWheel = throttle((e) => {
        this.scrollValue = Math.abs(e.deltaY);

        const x = () => { if (this.scrollValue > 200) { this.setState({ isTicking: true }); this.nextImage() } };
        x()


        TweenLite.to(this, .5, {
            scrollProgress: this.scrollValue,
            onUpdate: () => { this.setState({ scrollProgress: this.scrollProgress }); },
            onComplete: () => { this.setBack(); },
            ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
    }, 0)

    setBack = debounce(() => {
        TweenLite.to(this, .5, {
            scrollProgress: 0,
            onUpdate: (e) => { this.setState({ scrollProgress: this.scrollProgress }) },
            ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
    }, 0);

    componentWillReceiveProps() {
        // console.log(this.props);
    }

    componentDidUpdate() {
        // this.props.cursor_context.updateCursorParams(this.props.position);
    }

    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
                <div onWheel={(e) => { e.persist(); this.onWheel(e); }}>
                    <p style={{ color: 'white' }} onClick={() => this.prevImage()}>prev</p>
                    <p style={{ color: 'white' }} onClick={() => this.nextImage()}>next</p>
                    <FullScreen
                        transitionMap={TransitionMap}
                        images={this.images}
                        imageIndex={this.state.imageIndex}
                        progress={this.state.progress}
                        scrollProgress={this.state.scrollProgress}
                        currentImage={this.images[this.state.imageIndex]}
                        nextImage={this.images[this.state.imageIndex + 1]}
                        className="thumbnailCanvas"
                    />
                    <MainUi
                        projectName={this.projects[this.state.imageIndex]}
                    />
                </div>
                <CursorContainer
                    cursorParams={{
                        x: this.props.position.x,
                        y: this.props.position.y - this.props.elementDimensions.height
                    }
                    }
                />
            </React.Fragment>
        )
    }
}

export default compose(withRouter, withCursorContext)(Home)
