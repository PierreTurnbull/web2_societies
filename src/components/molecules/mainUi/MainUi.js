import React, { Component } from 'react'

import CircleCtaContainer from '../../atomes/circleCta/CircleCtaContainer';
import { TweenLite } from "gsap/TweenMax";
import scrollImage from "images/scroll.png"
import './mainUi.css'
export default class MainUi extends Component {

    goTo = () => {

    }

    render() {
        const { projectName, projectDescription, projectIntro } = this.props;

        return (
            <div className="mainUi" style={projectName === "soon" ? { gridTemplateColumns: "1fr" } : {}}>
                {
                    projectName !== "soon"
                        ? (
                            <>
                                <div className="description">
                                    <p className="project_title">
                                        {projectIntro}
                                    </p>
                                    <p className="p project_description">
                                        {projectDescription}
                                    </p>
                                </div>
                                <div className="cta" style={{ marginRight: 0 }}>
                                    <CircleCtaContainer path={projectName} holdComplete={(path) => this.goTo(path)} />
                                </div>
                            </>
                        )
                        : <div className="description">
                            <p className="project_title">
                                {projectIntro}
                            </p>
                        </div>
                }
            </div>
        )
    }
}
