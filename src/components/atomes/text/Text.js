import React, { PureComponent } from 'react'
import { TweenLite } from "gsap/TweenMax";
import VisibilitySensor from 'react-visibility-sensor';

class Text extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.textRef = React.createRef();
        this.anim = null;
    }

    onVisibilityChange = (isVisible) => {
        this.setState({
            isVisible
        });

        this.anim = isVisible && TweenLite.fromTo(this.textRef.current, .5,
            { y: 100, opacity: 0, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
            { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        );
    }

    createMarkup = (html) => {
        return { __html: html };
    }

    render() {
        const { text } = this.props;
        return (
            <VisibilitySensor onChange={this.state.isVisible === false && this.onVisibilityChange}>
                <p 
                className="p" 
                style={{ opacity: 0 }} 
                ref={this.textRef}
                dangerouslySetInnerHTML={this.createMarkup(text)}
                />
            </VisibilitySensor>
        )
    }
}

export default Text