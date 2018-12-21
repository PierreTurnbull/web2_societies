import React, { Component } from 'react'

import "./vote.css"
export default class Vote extends Component {
    render() {
        return (
            <div className="vote">
                <button className="voteBtn">
                    <p>Oui</p>
                    <p>58%</p>
                </button>
                <button className="voteBtn">
                    <p>Non</p>
                    <p>42%</p>
                </button>
            </div>
        )
    }
}
