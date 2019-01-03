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
        const { projectName } = this.props;

        return (
            <div className="mainUi">
                <div className="description">
                    <TransitionGroup className="projectName">
                        <CSSTransition
                            key={projectName}
                            // in={projectName ? true : false}
                            timeout={1000}
                            classNames="p"
                        >
                            {/* <Link to={projectName}> */}
                            <p>
                                {projectName}
                            </p>
                            {/* </Link> */}
                        </CSSTransition>
                    </TransitionGroup>
                    <TransitionGroup className="projectDescription">
                        <CSSTransition
                            key={projectName}
                            // in={projectName ? true : false}
                            timeout={1000}
                            classNames="p"
                        >
                            <p className="p">Can't you use onChange or onEnter property? Just add that you your top level route(s) and it will call a function and pass you the information about the previous and the next route.</p>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className="cta">
                    <CircleCtaContainer holdComplete={(path) => this.goTo(path)} />
                </div>
            </div>
        )
    }
}
