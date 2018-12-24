import React, { Component } from 'react'
import Image from './Image';

import './imageContainer.css';
export default class ImageContainer extends Component {
    render() {
        const { src, imageVariant, adornmentVariant, gradient, alt, imageAdornment } = this.props;
        return (
            <div className={adornmentVariant ? `imageContainer ${adornmentVariant}` : 'imageContainer'}>
                {
                    imageAdornment && (
                        <div className={`imageAdornment`}>
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
