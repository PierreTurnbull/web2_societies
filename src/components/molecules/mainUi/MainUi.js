import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Cursor from "../../atomes/cursor/Cursor"
import ReactCursorPosition from 'react-cursor-position';

import './mainUi.css'
import CircleCtaContainer from '../../atomes/circleCta/CircleCtaContainer';
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
                <div className="cta">
                    <CircleCtaContainer path={projectName} holdComplete={(path) => this.goTo(path)} />
                </div>
            </div>
        )
    }
}
