import React, { Component } from 'react';

import Home from 'components/containers/home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import './App.css';
import ThumbnailContainer from './components/molecules/thumbnail/ThumbnailContainer';
import SocietyContentContainer from './components/molecules/societyContent/SocietyContentContainer';
import MonksIntro from './components/molecules/intros/MonksIntro';
import JarawaIntro from './components/molecules/intros/JarawaIntro';
import JarawaContent from './components/molecules/societyContent/JarawaContent';
import MonksContent from './components/molecules/societyContent/MonksContent';
import Cursor from './components/atomes/cursor/Cursor';
import CursorContainer from './components/atomes/cursor/CursorContainer';
import ReactCursorPosition from 'react-cursor-position';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Router>
            <div>
              <Route path="/" component={() => <ReactCursorPosition className="curIn"><Home /></ReactCursorPosition>} />
              <Route path="/monks" component={() => <SocietyContentContainer societyIntro={<MonksIntro />} societyContent={<MonksContent />} />} />
              <Route path="/jarawa" component={() => <SocietyContentContainer societyIntro={<JarawaIntro />} societyContent={<JarawaContent />} />} />
              {/* <Route path="/rasta" component={() => <SocietyContentContainer societyContent={<RastaContent />} />} /> */}
            </div>
          </Router>
          {/* <p style={{ padding: "50px 50px 30px 50px", maxWidth: "1150px", margin: "0 auto" }}>© FSOCIETY a été pensé et réalisé par Salah, Alexandre, Pierre et Romain dans le cadre d’un projet à Hétic.</p> */}
          {/* <CursorContainer cursorPosition={this.props.position} /> */}
        </div>
      </div>
    );
  }
}

export default App;
