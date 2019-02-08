import React from 'react'
import { TweenLite } from "gsap/TweenMax";
import Image from './Image';
import VisibilitySensor from 'react-visibility-sensor';

import './imageContainer.css';
export default class ImageContainer extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
        this.imageContainerRef = React.createRef();
        this.anim = null;
    }

    componentDidMount() {
        this.anim = this.props.disabledVisible && TweenLite.fromTo(this.imageContainerRef.current, .5,
            { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
            { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        );
    }

    onVisibilityChange = (isVisible) => {
        this.setState({
            isVisible
        });

        this.anim = isVisible && TweenLite.fromTo(this.imageContainerRef.current, .7,
            { y: 100, opacity: 0, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
            { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        );
    }

    render() {
        const { src, imageVariant, adornmentVariant, gradient, alt, imageAdornment, adornmentReverse, disabledVisible } = this.props;
        return (
            <VisibilitySensor
                onChange={this.state.isVisible === false && this.onVisibilityChange}
                offset={{
                    value: -50
                }}
                partialVisible={true}
            >
                <div
                    className={adornmentReverse ? `imageContainer reverse` : 'imageContainer'}
                    style={{
                        ...this.props.style,
                        opacity: 0,
                    }}
                    ref={this.imageContainerRef}
                >
                    {
                        imageAdornment && (
                            <div
                                className={adornmentVariant ? `imageAdornment ${adornmentVariant}` : 'imageAdornment'}
                            >
                                <p>{imageAdornment}</p>
                                <p>{imageAdornment}</p>
                                <p>{imageAdornment}</p>
                                <p>{imageAdornment}</p>
                                <p>{imageAdornment}</p>
                            </div>
                        )
                    }
                    {
                        this.props.type === "video"
                            ? (
                                <div className={`societyContentImage ${imageVariant}`}>
                                    <video autoplay={"true"} preload muted loop={"true"} style={{ width: '100%', height: '100%' }}>
                                        <source src={src} type="video/mp4" />
                                        <p>Your browser doesn't support HTML5 video. Here is
                                    a <a href="myVideo.mp4">link to the video</a> instead.</p>
                                    </video>
                                </div>
                            )
                            : (
                                <Image
                                    src={src}
                                    variant={imageVariant}
                                    gradient={gradient}
                                    alt={alt}
                                />
                            )
                    }
                </div>
            </VisibilitySensor>
        )
    }
}
