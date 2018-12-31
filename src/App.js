import React, { Component } from 'react';

import Home from 'components/containers/home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import './App.css';
import SocietyContentContainer from './components/molecules/societyContent/SocietyContentContainer';
import MonksIntro from './components/molecules/intros/MonksIntro';
import JarawaIntro from './components/molecules/intros/JarawaIntro';
import JarawaContent from './components/molecules/societyContent/JarawaContent';
import MonksContent from './components/molecules/societyContent/MonksContent';
import Loader from './components/molecules/loader/Loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Loader />
        <Router>
          <div>
            <Route path="/" component={() => <Home />} />
            <Route path="/monks" component={() => <SocietyContentContainer societyIntro={<MonksIntro />} societyContent={<MonksContent />} />} />
            <Route path="/jarawa" component={() => <SocietyContentContainer societyIntro={<JarawaIntro />} societyContent={<JarawaContent />} />} />
            {/* <Route path="/rasta" component={() => <SocietyContentContainer societyContent={<RastaContent />} />} /> */}
          </div>
        </Router>
        <p style={{ padding: "50px 50px 30px 50px", maxWidth: "1150px", margin: "0 auto" }}>© FSOCIETY a été pensé et réalisé par Salah, Alexandre, Pierre et Romain dans le cadre d’un projet à Hétic.</p>
      </div>
    );
  }
}

export default App;
