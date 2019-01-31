import React, { Component } from 'react'
import { TweenLite } from "gsap/TweenMax";
import TrackVisibility from 'react-on-screen';

import Image from './Image';

import './imageContainer.css';
export default class ImageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageProgress: 0
        }

        this.imageProgress = 0;

        this.imageAnim = TweenLite.to(this, 2, {
            imageProgress: 1,
            paused: true,
            onUpdate: () => { this.setState({ imageProgress: this.imageProgress }) },
            // ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0526 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
        });
    }

    componentDidUpdate() {
        // console.log(this.props.isVisible);
        this.imageAnim.play();
    }

    render() {
        const { src, imageVariant, adornmentVariant, gradient, alt, imageAdornment, adornmentReverse, anim, isVisible } = this.props;
        return (
            <div className={adornmentReverse ? `imageContainer reverse` : 'imageContainer'} style={{ ...this.props.style }}>
                {
                    imageAdornment && (
                        <div
                            className={adornmentVariant ? `imageAdornment ${adornmentVariant}` : 'imageAdornment'}
                            style={{
                                width: 30 / 100 * this.state.imageProgress * 100 + "%",
                                height: this.state.imageProgress * 100 + "%",
                                opacity: this.state.imageProgress
                            }}
                        >
                            <p>{imageAdornment}</p>
                            <p>{imageAdornment}</p>
                            <p>{imageAdornment}</p>
                            <p>{imageAdornment}</p>
                            <p>{imageAdornment}</p>
                        </div>
                    )
                }
                <Image
                    src={src}
                    variant={imageVariant}
                    gradient={gradient}
                    alt={alt}
                    style={{ transform: `scale(${1.2 - this.state.imageProgress + .8})`, opacity: this.state.imageProgress }}
                />
            </div>
        )
    }
}
