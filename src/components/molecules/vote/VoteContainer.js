import React, { Component } from 'react'
import Vote from './Vote';
import Quote from '../../atomes/Quote/Quote';

export default class VoteContainer extends Component {
    render() {
        return (
            <div>
                <Quote style="question" text="Lorem ipsum dolor sit amet ?" />
                <Vote onVote={(answer) => this.onVote(answer)} />
            </div>
        )
    }
}
