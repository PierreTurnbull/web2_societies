import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import Cta from '../../atomes/Cta';
import ImageMonks from "images/moines.jpg"
import ImageJarawa from "images/jarawa.jpg"
import ImageRasta from "images/rasta.jpeg"
import Scene from '../../atomes/Scene/Scene';

import "./thumbnailContainer.css"
export default class ThumbnailContainer extends Component {
    constructor(props) {
        super(props);
        this.scene1 = React.createRef();
        this.scene2 = React.createRef();
        this.scene3 = React.createRef();
    }

    // componentDidMount() {
    //     console.log(this.scene1.current.scene.current);
    // }

    render() {
        return (
            <div className="thumbnailContainer">
                <Thumbnail
                    key={1}
                    background={ImageMonks}
                    title="Les moines du Mont Athos"
                    name="1"
                    cta={() => <Cta text="wassup" onClick={() => console.log('click')} />}
                    ref={this.scene1}
                    refu={this.scene1}
                    canvas={true}
                />
                <Thumbnail
                    key={2}
                    background={ImageJarawa}
                    title="Les Jarawas des Andaman"
                    name="2"
                    cta={() => <Cta text="wassup" onClick={() => console.log('click')} />}
                    ref={this.scene2}
                    refu={this.scene2}
                    canvas={true}
                />
                <Thumbnail
                    key={3}
                    background={ImageRasta}
                    title="Les rastas de Jamaïque"
                    name="3"
                    cta={() => <Cta text="wassup" onClick={() => console.log('click')} />}
                    ref={this.scene3}
                    refu={this.scene3}
                    canvas={true}
                />
                {/* <Scene
                    img1={ImageMonks}
                    img2={ImageJarawa}
                    img3={ImageRasta}
                    className="thumbnailCanvas"
                    scene1={this.scene1}
                    scene2={this.scene2}
                    scene3={this.scene3}
                /> */}
            </div>
        )
    }
}
