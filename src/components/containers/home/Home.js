import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import ThumbnailContainer from '../../molecules/thumbnail/ThumbnailContainer';
import SocietyContentContainer from '../../molecules/societyContent/SocietyContentContainer';
import MonksContent from '../../molecules/societyContent/MonksContent';
import JarawaContent from '../../molecules/societyContent/JarawaContent';
import MonksIntro from '../../molecules/intros/MonksIntro';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <div>
                        <Route path="/" component={() => <ThumbnailContainer />} />
                        <Route path="/monks" component={() => <SocietyContentContainer societyIntro={<MonksIntro />} societyContent={<MonksContent />} />} />
                        <Route path="/jarawa" component={() => <SocietyContentContainer societyIntro={<p className="p">Jarawa</p>} societyContent={<JarawaContent />} />} />
                        {/* <Route path="/rasta" component={() => <SocietyContentContainer societyContent={<RastaContent />} />} /> */}
                    </div>
                </Router>
                <p style={{ padding: "50px 50px 30px 50px", maxWidth: "1150px", margin: "0 auto" }}>© FSOCIETY a été pensé et réalisé par Salah, Alexandre, Pierre et Romain dans le cadre d’un projet à Hétic.</p>
            </div>
        )
    }
}

export default Home
