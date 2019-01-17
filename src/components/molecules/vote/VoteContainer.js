import React, { Component } from 'react'
import Vote from './Vote';
import Quote from '../../atomes/Quote/Quote';

import './voteContainer.sass';
export default class VoteContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="voteContainer">
                    <hr />
                    <Quote variant="question" text="Lorem ipsum dolor sit amet ?" style={{ textAlign: 'center', marginTop: '32px' }} />
                    <Vote onVote={(answer) => this.onVote(answer)} />
                    <hr />
                </div>
            </React.Fragment>
        )
    }
}
