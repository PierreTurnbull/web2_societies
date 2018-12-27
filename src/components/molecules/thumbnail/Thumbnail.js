import React, { Component } from 'react'
import Scene from 'components/atomes/Scene/Scene';
import { TweenLite } from "gsap/TweenMax";

import "./thumbnail.css"
export class Thumbnail extends Component {

  state = {
    holdValue: 0.0,
    onHoldComplete: false
  }
  constructor(props) {
    super(props);
    // this.scene1 = React.createRef();
    this.scene = React.createRef();
    this.background = this.props.background;
    // this.scene3 = React.createRef();
    this.holdValue = 0.0;
    this.animation = TweenLite.to(this, 1.3, {
      holdValue: 100,
      paused: true,
      onUpdate: this.incrementHoldValue,
      onComplete: this.onHoldComplete,
      ease: 'CustomEase.create("custom", "M0,0 C0,0 0.294,-0.016 0.4,0.1 0.606,0.326 0.604,0.708 0.684,0.822 0.771,0.946 1,1 1,1")'
    });
  }

  incrementHoldValue = () => {
    this.setState({ holdValue: this.holdValue })
  }

  reverseAnimation = () => {
    !this.state.onHoldComplete && this.animation.reverse();
  }

  onHoldComplete = () => {
    console.log("colmelpf");
    this.setState({ onHoldComplete: true })
    this.props.onComplete(this.props.society);
    // this.animation.pause();
    // TweenLite.to(this, 1, { holdValue: 100, paused: true, onUpdate: this.incrementHoldValue });
  }

  render() {
    return (
      <div
        className="thumbnail"
        ref={this.scene}
        style={{ backgroundImage: this.props.gradient }}
        onMouseDown={() => {
          this.animation.play();
        }}
        onTouchStart={() => {
          this.animation.play();
        }}
        onMouseUp={() => {
          this.reverseAnimation()
        }}
        onTouchEnd={() => {
          this.reverseAnimation()
        }}
        onMouseLeave={() => this.reverseAnimation()}
      >
        <img src={this.props.background} alt="bakcground" />
        <h2 className="title">{this.props.title}</h2>
        <this.props.cta svgUrl={this.props.svgUrl} />
        <div style={{ background: 'white', height: '1px', width: `${this.holdValue}%` }}></div>
        {
          this.props.canvas && <Scene
            // img={this.props.ImageMonks}
            img={this.background}
            className="thumbnailCanvas"
            scene={this.scene}
            name={this.props.name}
            holdValue={this.holdValue}
          />
        }
      </div>
    )
  }
}

export default Thumbnail

