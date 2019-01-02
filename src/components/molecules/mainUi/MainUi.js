import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";

import './mainUi.css'
export default class MainUi extends Component {
    render() {
        const { projectName } = this.props;

        return (
            <div className="mainUi">
                <TransitionGroup className="projectName">
                    <CSSTransition
                        key={projectName}
                        in={projectName ? true : false}
                        timeout={1000}
                        classNames="p"
                    >
                        <Link to={projectName}>
                            {projectName}
                        </Link>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}
