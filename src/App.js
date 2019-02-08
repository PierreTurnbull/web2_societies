import React, { Component } from 'react';

import Home from 'components/containers/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from 'components/molecules/header/Header';
import './App.css';
import ThumbnailContainer from './components/molecules/thumbnail/ThumbnailContainer';
import SocietyContentContainer from './components/molecules/societyContent/SocietyContentContainer';
import Feedback from './components/molecules/feedback/Feedback';
import Modal from './components/molecules/modal/Modal';
import MonksIntro from './components/molecules/intros/MonksIntro';
import JarawaIntro from './components/molecules/intros/JarawaIntro';
import JarawaContent from './components/molecules/societyContent/JarawaContent';
import MonksContent from './components/molecules/societyContent/MonksContent';
import Cursor from './components/atomes/cursor/Cursor';
import CursorContainer from './components/atomes/cursor/CursorContainer';
import ReactCursorPosition from 'react-cursor-position';
import CursorProvider from './contexts/cursor/cursor.provider';
import Quote from './components/atomes/Quote/Quote';
import Text from './components/atomes/text/Text';

class App extends React.Component {
  render() {
    console.log('HOME', this.props);
    return (
      <CursorProvider>
        <div className="App">
          <Router>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw", flexWrap: 'wrap' }}>
              <Header />
              <Home />
              <Route path="/monks" component={() => <SocietyContentContainer society="monks" />} />
              <Route path="/jarawa" component={() => <SocietyContentContainer society="jarawa" />} />
              <Route path="/rasta" component={() => <SocietyContentContainer society="rasta" />} />
              <Route exact path="/informations"
                component={() => (
                  <Modal
                    title={<Quote variant="simple" text={<p>FSOCIETY, c’est quoi ?</p>} />}
                    text={<Text text="Les îles Andaman sont un <b>archipel situé entre le Golf du Bengal et la Mer d’Andaman </b>où habite la tribu des Jarawas, un peuple autochtone vivant depuis des millénaires coupés du monde et du progrès technologique." />}
                  />
                )}
              />
              <Route exact path="/avis" component={() => <Feedback />} />
              <Route exact path="/credits"
                component={() => (
                  <Modal
                    title={<Quote variant="simple" text={<p>FSOCIETY existe grâce à eux...</p>} />}
                    text={<Text text="Les îles Andaman sont un <b>archipel situé entre le Golf du Bengal et la Mer d’Andaman </b>où habite la tribu des Jarawas, un peuple autochtone vivant depuis des millénaires coupés du monde et du progrès technologique." />}
                  />
                )}
              />
            </div>
          </Router>
        </div>
      </CursorProvider>
    );
  }
}

export default App;
