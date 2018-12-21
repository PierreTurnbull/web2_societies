import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import ThumbnailContainer from '../../molecules/thumbnail/ThumbnailContainer';
import SocietyContentContainer from '../../molecules/societyContent/SocietyContentContainer';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <div>
                        <ThumbnailContainer />
                        <Route path="/rasta" component={() => <SocietyContentContainer />} />
                        <Route path="/monks" component={() => <SocietyContentContainer />} />
                        <Route path="/jarawa" component={() => <SocietyContentContainer />} />
                    </div>
                </Router>
                <p style={{ padding: "50px 50px 30px 50px", maxWidth: "1150px", margin: "0 auto" }}>© FSOCIETY a été pensé et réalisé par Salah, Alexandre, Pierre et Romain dans le cadre d’un projet à Hétic.</p>
            </div>
        )
    }
}

export default Home
