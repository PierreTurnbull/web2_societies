import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Cursor from "../../atomes/cursor/Cursor"
import ReactCursorPosition from 'react-cursor-position';

import './mainUi.css'
import CircleCtaContainer from '../../atomes/circleCta/CircleCtaContainer';
import scrollImage from "images/scroll.png"
export default class MainUi extends Component {

    goTo = () => {

    }

    render() {
        const { projectName, projectDescription, projectIntro } = this.props;

        return (
            <div className="mainUi">
                <div className="description">
                    <p className="project_title">
                        {projectIntro}
                    </p>
                    <p className="p project_description">
                        {projectDescription}
                    </p>
                </div>
                <div className="cta" style={{marginRight: 0}}>
                    <CircleCtaContainer path={projectName} holdComplete={(path) => this.goTo(path)} />
                </div>
                <img style={{height: "50px", width: "auto", margin: "0 auto", gridColumn: "1/3"}} src={scrollImage} alt="scroll icon" />
            </div>
        )
    }
}
