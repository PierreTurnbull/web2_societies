import React, { Component } from 'react';

import Home from 'components/containers/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import CursorProvider from './contexts/cursor/cursor.provider';

class App extends React.PureComponent {
  render() {
    console.log('HOME', this.props);
    return (
      <CursorProvider>
        <div className="App">
          <Header />
          <Router>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/monks" component={() => <SocietyContentContainer society="monks" />} />
              <Route path="/jarawa" component={() => <SocietyContentContainer society="jarawa" />} />
            </div>
          </Router>
          <CursorContainer
          />
        </div>
      </CursorProvider>
    );
  }
}

export default App;
