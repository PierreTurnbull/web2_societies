import React, { Component } from 'react'
import Scene from 'components/atomes/Scene/Scene';

import "./thumbnail.css"
export class Thumbnail extends Component {
  constructor(props) {
    super(props);
    // this.scene1 = React.createRef();
    this.scene = React.createRef();
    this.background = this.props.background;
    // this.scene3 = React.createRef();
  }

  componentDidMount() {
    console.log(this.props, this.scene);
  }

  render() {
    return (
      <div className="thumbnail" ref={this.scene} style={{backgroundImage: this.props.gradient}}>
        {/* <img src={this.props.background} alt="bakcground" /> */}
        <h2 className="title">{this.props.title}</h2>
        <this.props.cta svgUrl={this.props.svgUrl} />
        {
          this.props.canvas && <Scene
            // img={this.props.ImageMonks}
            img={this.background}
            className="thumbnailCanvas"
            scene={this.scene}
            name={this.props.name}
          />
        }
      </div>
    )
  }
}

export default Thumbnail

