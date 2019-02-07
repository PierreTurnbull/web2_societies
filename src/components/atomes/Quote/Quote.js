import React from 'react'
import { TweenLite } from "gsap/TweenMax";
import VisibilitySensor from 'react-visibility-sensor';

import "./quote.css"
class Quote extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
    this.quoteRef = React.createRef();
    this.anim = null;
  }

  onVisibilityChange = (isVisible) => {
    this.setState({
      isVisible
    });

    this.anim = isVisible && TweenLite.fromTo(this.quoteRef.current, .5,
      { y: 100, opacity: 0, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
      { y: 0, opacity: 1, transformOrigin: "bottom left", ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
    );
  }

  render() {
    const { style, text, variant } = this.props;
    return (
      <VisibilitySensor onChange={this.state.isVisible === false && this.onVisibilityChange}>
        <p
          className={`quote ${variant}`}
          style={{ ...style, opacity: 0 }}
          ref={this.quoteRef}>
          {text}
        </p>
      </VisibilitySensor>
    )
  }
}
export default Quote
