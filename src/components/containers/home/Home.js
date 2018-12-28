import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import ThumbnailContainer from '../../molecules/thumbnail/ThumbnailContainer';
import SocietyContentContainer from '../../molecules/societyContent/SocietyContentContainer';
import MonksContent from '../../molecules/societyContent/MonksContent';
import JarawaContent from '../../molecules/societyContent/JarawaContent';
import MonksIntro from '../../molecules/intros/MonksIntro';
import JarawaIntro from '../../molecules/intros/JarawaIntro';
import { withRouter } from 'react-router'

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
        //Here ya go
        this.props.history.listen((location, action) => {
            this.setState({ redirect: true })
            console.group("on route change");
            console.log("on route change");
            console.groupEnd()
        });
    }
    render() {
        return (
            <div>
                <ThumbnailContainer />
            </div>
        )
    }
}

export default withRouter(Home)
