import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

import Scrollbar from 'react-smooth-scrollbar';
import "./societyContentContainer.css";
class SocietyContentContainer extends Component {

    constructor(props) {
        super(props);

        this.scrollTime = 1.2;
        this.scrollDistance = 170;

        this.scrollY = 0
        this.societyContainer = React.createRef()

        this.scroller = {
            target: this.societyContainer
        };
    };

    render() {
        return (
            <div
                className="societyContentContainer"
            >
                <Scrollbar
                    damping={.05}
                    className="scrollContent"
                    thumbMinSize={10}
                >
                    <Link to="/">- Retour à l'acceuil</Link>
                    {
                        this.props.societyIntro
                    }
                    {
                        this.props.societyContent
                    }
                </Scrollbar>
            </div>
        )
    }
}

export default withRouter(SocietyContentContainer)