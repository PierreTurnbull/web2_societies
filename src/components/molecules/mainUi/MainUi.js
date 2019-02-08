import React, { Component } from 'react'

import CircleCtaContainer from '../../atomes/circleCta/CircleCtaContainer';
import './mainUi.css'
export default class MainUi extends Component {
    render() {
        const { projectName, projectDescription, projectIntro } = this.props;

        return (
            <div className={`mainUi ${projectName === "soon" && 'mainUi--fullscreen'}`}>
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
                                <div className="cta" style={{ marginRight: 0, cursor: "none" }}>
                                    <CircleCtaContainer path={projectName} holdComplete={(path) => this.goTo(path)} />
                                </div>
                            </>
                        )
                        : <div className="description">
                            <p className="project_title">
                                {projectIntro}
                            </p>
                            <p className="p project_description">
                                {projectDescription}
                            </p>
                        </div>
                }
            </div>
        )
    }
}
