import React, { Component } from 'react'
import Scene from 'components/atomes/Scene/Scene';

import "./thumbnail.css"
export class Thumbnail extends Component {
  constructor(props) {
    super(props);
    // this.scene1 = React.createRef();
    this.scene = React.createRef();
    // this.scene3 = React.createRef();
  }

  render() {
    return (
      <div className="thumbnail" ref={this.scene}>
        <img src={this.props.background} alt="bakcground image" />
        <h2 className="title">{this.props.title}</h2>
        <this.props.cta className="cta" />
      </div>
    )
  }
}

export default Thumbnail

