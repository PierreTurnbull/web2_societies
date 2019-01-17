import React, { Component } from 'react'
import Scene from 'components/atomes/Scene/Scene';

import "./thumbnail.css"
export class Thumbnail extends Component {

  state = {
    holdValue: 0.0,
    isHoldComplete: false
  }
  constructor(props) {
    super(props);
    // this.scene1 = React.createRef();
    this.scene = React.createRef();
    this.background = this.props.background;
    this.background2 = this.props.background2;
    // this.scene3 = React.createRef();
  }

  reverseAnimation = () => {
    !this.state.isHoldComplete && this.props.animation.reverse();
  }

  render() {
    return (
      <div
        className="thumbnail"
        ref={this.scene}
        style={{ backgroundImage: this.props.gradient }}
        onMouseDown={() => {
          this.props.animation.play();
        }}
        onTouchStart={() => {
          this.props.animation.play();
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
        {/* <this.props.cta svgUrl={this.props.svgUrl} /> */}
        <div style={{ background: 'white', height: '1px', width: `${this.props.holdValue}%` }}></div>
        {/* {
          this.props.canvas && <Scene
            // img={this.props.ImageMonks}
            img={this.background}
            background2={this.background2}
            className="thumbnailCanvas"
            scene={this.scene}
            name={this.props.name}
            holdValue={this.holdValue}
          />
        } */}
      </div>
    )
  }
}

export default Thumbnail

