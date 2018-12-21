import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import Cta from '../../atomes/Cta';
import ImageMonks from "images/moines.jpg"
import ImageJarawa from "images/jarawa.jpg"
import ImageRasta from "images/rastaa.jpeg"
import Scene from '../../atomes/Scene/Scene';
import arrowLeftIcon from 'images/icons/arrow.svg';
import { withRouter } from "react-router";

import "./thumbnailContainer.css"
import ArrowIconContainer from '../../atomes/arrowIcon/ArrowIconContainer';
import Cursor from '../../atomes/cursor/Cursor';
class ThumbnailContainer extends Component {
    state = {
        redirect: false
    }

    constructor(props) {
        super(props);
        this.scene1 = React.createRef();
        this.scene2 = React.createRef();
        this.scene3 = React.createRef();
    }

    // componentDidMount() {
    //     console.log(this.scene1.current.scene.current);
    // }
    redirectTo = (path) => {
        // this.setState({redirect: path});
        this.props.history.push(path);
    }

    render() {
        const gradientMonks = "linear-gradient(to right, rgba(87, 18, 0, 0.2), rgba(87, 18, 0, 0.4))";
        const gradientJarawa = "linear-gradient(to right, rgba(146, 154, 63, 0.2), rgba(146, 154, 63, 0.4))";
        const gradientRasta = "linear-gradient(to right, rgba(63, 154, 146, 0.2), rgba(63, 154, 146, 0.4))";
        return (
            <div className="thumbnailContainer">
                <Thumbnail
                    key={1}
                    society="monks"
                    background={ImageMonks}
                    title="Les moines du Mont Athos"
                    name="1"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene1}
                    refu={this.scene1}
                    canvas={true}
                    gradient={gradientMonks}
                    onComplete={(path) => this.redirectTo(path)}
                />
                <Thumbnail
                    key={2}
                    society="jarawa"
                    background={ImageJarawa}
                    title="Les Jarawas des Andaman"
                    name="2"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene2}
                    refu={this.scene2}
                    canvas={true}
                    gradient={gradientJarawa}
                    onComplete={(path) => this.redirectTo(path)}
                />
                <Thumbnail
                    key={3}
                    society="rasta"
                    background={ImageRasta}
                    title="Les rastas de Jamaïque"
                    name="3"
                    cta={() => <ArrowIconContainer svgUrl={arrowLeftIcon} onClick={() => console.log('click')} />}
                    ref={this.scene3}
                    refu={this.scene3}
                    canvas={true}
                    gradient={gradientRasta}
                    onComplete={(path) => this.redirectTo(path)}
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

export default withRouter(ThumbnailContainer);