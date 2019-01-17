import React, { Component } from 'react'
import ArrowIcon from './ArrowIcon';

export default class ArrowIconContainer extends Component {
    render() {
        const { svgUrl } = this.props;
        
        return (
            <ArrowIcon svgUrl={svgUrl} />
        )
    }
}
