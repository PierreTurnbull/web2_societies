import React from 'react'
import { withRouter } from 'react-router'
import { TweenLite } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import { compose } from 'recompose';
import FullScreen from '../../molecules/fullScreen/FullScreen';

import TransitionMap from "images/transtionMap.jpeg"
import JarawaImage from "images/assets/jarawa.jpg"
import MonksImage from "images/assets/monks_fullscreen.jpg"
import RastaImage from "images/assets/rastaa_fullscreen.jpg"
import MainUi from '../../molecules/mainUi/MainUi';
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
import TimerBarContainer from '../../atomes/timerBar/TimerBarContainer';
import scrollImage from "images/scroll.png"
import MobileNavEvents from './MobileNavEvents';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.societiesGradient = [
            {
                r: 87, g: 18, b: 0
            },
            {
                r: 146, g: 154, b: 63
            },
            {
                r: 63, g: 154, b: 146
            },
            {
                r: 0, g: 0, b: 0
            },
        ]

        this.state = {
            redirect: false,
            imageIndex: 0,
            isTicking: false,
            scrollProgress: 0.0,
            gradientRGB: {
                r: this.societiesGradient[0].r,
                g: this.societiesGradient[0].g,
                b: this.societiesGradient[0].b,
            },
            isMobile: false
        }

        this.onWheel = this.onWheel.bind(this);
        this.setBack = this.setBack.bind(this);

        this.images = [MonksImage, JarawaImage, RastaImage];
        this.projects = [
            {
                name: "monks",
                intro: "Les moines du Mont Athos",
                description: "Découvrez cette communauté de chrétiens orthodoxes vivant en autarcie afin de pouvoir dédier leur vie à la religion, loin de tout péchés.",
            },
            {
                name: "jarawa",
                intro: "Les Jarawas des Andaman",
                description: "Découvrez ce peuple autochtone vivant depuis des années coupé du monde moderne et du progrès technologique.",
            },
            {
                name: "soon",
                intro: "Les rastas de Jamaïque",
                description: "Épisode prochainement disponible.",
            }
        ];
        this.progress = 0.0;
        this.scrollProgress = 0.0;

        this.gradientRGB = {
            r: this.state.gradientRGB.r,
            g: this.state.gradientRGB.g,
            b: this.state.gradientRGB.b
        }

        this.props.history.listen((location, action) => {
            this.setState({ redirect: true })
            console.group("on route change");
            console.groupEnd()
        });

        this.progressAnimation = TweenLite.to(this, .5, {
            progress: 100,
            paused: true,
            onUpdate: () => { this.setState({ progress: this.progress }) },
            // ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0526 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
            // ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
    }

    prevImage = () => {
        if (this.state.imageIndex > 0) {
            this.progressAnimation.play();
            this.progressAnimation.eventCallback('onComplete', () => {
                this.handleIndex("prev");
                this.gradientAnimation();
                this.progressComplete();
            });
        } else {
            this.progressAnimation.play();
            this.progressAnimation.eventCallback('onComplete', () => {
                this.setState({ imageIndex: Number(this.images.length - 1) });
                this.gradientAnimation();
                this.progressComplete();
            });
        }
    }

    getGradient = () => {
        let index = this.state.imageIndex;
        // console.log(index);

        const nextGradient = {
            r: this.societiesGradient[index].r,
            g: this.societiesGradient[index].g,
            b: this.societiesGradient[index].b,
        }
        return nextGradient
    }

    gradientAnimation = () => {
        TweenLite.to(
            this.gradientRGB, .7, {
                r: { ...this.getGradient() }.r,
                g: { ...this.getGradient() }.g,
                b: { ...this.getGradient() }.b,
            }
        );
    }

    nextImage = () => {
        if (this.images.length - 1 > this.state.imageIndex) {
            this.progressAnimation.play();
            this.progressAnimation.eventCallback('onComplete', () => {
                this.handleIndex("next");
                this.gradientAnimation();
                this.progressComplete();
            });
        } else {
            this.progressAnimation.play();
            this.progressAnimation.eventCallback('onComplete', () => {
                this.progressComplete();
                this.setState({ imageIndex: Number(0) })
                this.gradientAnimation();
            });
        }
    }

    progressComplete = () => {
        this.progressAnimation.reverse();
        this.setState({ isTicking: false });
    }

    handleIndex = (param) => {
        param === "next"
            ? this.setState({ imageIndex: Number(this.state.imageIndex + 1) })
            : this.setState({ imageIndex: Number(this.state.imageIndex - 1) })
    }

    onWheel = throttle((e) => {
        // this.scrollValue = Math.abs(e.deltaY);
        e.stopPropagation()
        this.scrollValue = e.deltaY;

        const x = () => {
            if (this.scrollValue > 200) {
                this.setState({ isTicking: true });
                this.nextImage();
            } else if (this.scrollValue < -200) {
                this.prevImage();
            }
        };
        x();

        TweenLite.to(this, .5, {
            scrollProgress: this.scrollValue,
            onUpdate: () => { this.setState({ scrollProgress: this.scrollProgress }); },
            onComplete: () => { this.setBack(); },
            // ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
    }, 0);

    setBack = debounce(() => {
        TweenLite.to(this, .5, {
            scrollProgress: 0,
            onUpdate: (e) => { this.setState({ scrollProgress: this.scrollProgress }) },
            // ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
    }, 0);

    componentDidMount() {
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize, false);
    }

    componentWillReceiveProps() {
        // this.props.cursor_context.updateCursorParams(this.props.position);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize = () => {
        if (window.innerWidth <= 768) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }

    // this.isMobile = window.innerWidth <= 768;
    render() {
        const monks = "linear-gradient(to right, rgba(87, 18, 0, 0.2), rgba(87, 18, 0, 0.4))";
        const jarawa = "linear-gradient(to right, rgba(146, 154, 63, 0.2), rgba(146, 154, 63, 0.4))";
        const rasta = "linear-gradient(to right, rgba(63, 154, 146, 0.2), rgba(63, 154, 146, 0.4))";
        const gradients = {
            monks,
            jarawa,
            rasta
        }
        const dynBackground = gradients[this.projects[this.state.imageIndex].name]
        return (
            <div
                onWheel={(e) => { e.persist(); this.onWheel(e); }}
                style={{ display: 'flex', alignItems: "center", height: "100%", flexDirection: "column", width: "100%" }}
            >
                <div id="modalPortal" />
                {
                    this.state.isMobile && <TimerBarContainer onComplete={this.nextImage} />
                }
                <FullScreen
                    transitionMap={TransitionMap}
                    images={this.images}
                    imageIndex={this.state.imageIndex}
                    progress={this.state.progress}
                    scrollProgress={this.state.scrollProgress}
                    currentImage={this.images[this.state.imageIndex]}
                    nextImage={this.images[this.state.imageIndex + 1]}
                    className="thumbnailCanvas"
                    gradient={dynBackground}
                    gradientRGB={this.gradientRGB}
                />
                <MainUi
                    projectIntro={this.projects[this.state.imageIndex].intro}
                    projectName={this.projects[this.state.imageIndex].name}
                    projectDescription={this.projects[this.state.imageIndex].description}
                />
                <div style={{ margin: "0 auto 24px auto", position: "absolute", bottom: 0, zIndex: 1 }}>
                    {
                        this.state.isMobile
                            ? <div onClick={() => this.props.history.push(this.projects[this.state.imageIndex].name)}>
                                <i
                                    className="material-icons"
                                    style={{ color: 'white', display: "block", textAlign: "center", margin: '0 auto' }}
                                >
                                    keyboard_arrow_up
                                </i>
                                <p style={{ color: "white", fontFamily: "AktivGrotesk", fontWeight: 300, fontSize: 14 }}>
                                    Découvrir
                                </p>
                            </div>
                            : <img style={{ height: "50px", width: "auto", gridColumn: "1/3" }} src={scrollImage} alt="scroll icon" />
                    }
                </div>
                {
                    this.state.isMobile && <MobileNavEvents
                        path={this.projects[this.state.imageIndex].name}
                        onNext={this.nextImage}
                        onPrev={this.prevImage}
                    />
                }
            </div>
        )
    }
}

export default compose(withRouter, withCursorContext)(Home)
