import React, { Component } from 'react'
import Scene from 'components/atomes/Scene/Scene';
import { TweenLite, TweenMax, TimelineMax } from "gsap/TweenMax";

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
    this.animation = TweenLite.to(this, 1, { holdValue: 100, paused: true, onUpdate: this.incrementHoldValue, onComplete: this.onHoldComplete });
  }

  incrementHoldValue = () => {
    this.setState({ holdValue: this.holdValue })
  }

  reverseAnimation = () => {
    !this.state.onHoldComplete && this.animation.reverse();
  }

  onHoldComplete = () => {
    console.log("colmelpf");
    this.setState({onHoldComplete: true})
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
        onMouseUp={() => {
          this.reverseAnimation()
        }}
        onMouseLeave={()=>this.reverseAnimation()}
      >
        {/* <img src={this.props.background} alt="bakcground" /> */}
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

