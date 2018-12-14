import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from 'components/molecules/header/Header';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>home</h1>
                <Router>
                    <div>
                        <Route path="/rasta" component={() => <p>Rasta</p>} />
                        <Route path="/moines" component={() => <p>Moines</p>} />
                        <Route path="/jarawa" component={() => <p>Jarawa</p>} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Home
