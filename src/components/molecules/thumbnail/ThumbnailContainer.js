import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import Cta from '../../atomes/Cta';
import ImageMonks from "images/moines.jpg"
import ImageJarawa from "images/jarawa.jpg"
import ImageRasta from "images/rastaa.jpeg"
import Scene from '../../atomes/Scene/Scene';
import arrowLeftIcon from 'images/icons/arrow.svg';

import "./thumbnailContainer.css"
import ArrowIconContainer from '../../atomes/arrowIcon/ArrowIconContainer';
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
        const gradientMonks = "linear-gradient(to right, rgba(87, 18, 0, 0.2), rgba(87, 18, 0, 0.4))";
        const gradientJarawa = "linear-gradient(to right, rgba(146, 154, 63, 0.2), rgba(146, 154, 63, 0.4))";
        const gradientRasta = "linear-gradient(to right, rgba(63, 154, 146, 0.2), rgba(63, 154, 146, 0.4))";
        return (
            <div className="thumbnailContainer">
                <Thumbnail
                    key={1}
                    background={ImageMonks}
                    title="Les moines du Mont Athos"
                    name="1"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene1}
                    refu={this.scene1}
                    canvas={true}
                    gradient={gradientMonks}
                />
                <Thumbnail
                    key={2}
                    background={ImageJarawa}
                    title="Les Jarawas des Andaman"
                    name="2"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene2}
                    refu={this.scene2}
                    canvas={true}
                    gradient={gradientJarawa}
                />
                <Thumbnail
                    key={3}
                    background={ImageRasta}
                    title="Les rastas de Jamaïque"
                    name="3"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene3}
                    refu={this.scene3}
                    canvas={true}
                    gradient={gradientRasta}
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
