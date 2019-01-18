import React, { Component } from 'react'
import Image from './Image';

import './imageContainer.css';
export default class ImageContainer extends Component {
    render() {
        const { src, imageVariant, adornmentVariant, gradient, alt, imageAdornment, adornmentReverse } = this.props;
        return (
            <div className={adornmentReverse ? `imageContainer reverse` : 'imageContainer'} style={{...this.props.style}}>
                {
                    imageAdornment && (
                        <div className={adornmentVariant ? `imageAdornment ${adornmentVariant}` : 'imageAdornment'}>
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
                />
            </div>
        )
    }
}
