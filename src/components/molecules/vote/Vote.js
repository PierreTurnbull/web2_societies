import React, { Component } from 'react'

import "./vote.css"
export default class Vote extends Component {
    render() {
        return (
            <div className="vote">
                <div className="voteBtn">
                    <p>Oui</p>
                    <p>58%</p>
                </div>
                <div className="voteBtn">
                    <p>Non</p>
                    <p>42%</p>
                </div>
            </div>
        )
    }
}
