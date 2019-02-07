import React, { Component } from 'react'
import ComparePopUp from './ComparePopUp';
import CompareContentBtnContainer from '../compareContentBtn/CompareContentBtnContainer';

export default class ComparePopUpContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    onClick = () => {

    }
    render() {
        const { text } = this.props;
        const { isOpen } = this.state;

        return (
            <div style={{ position: "relative" }}>
                <CompareContentBtnContainer
                    icon={
                        <i className="material-icons">
                            compare_arrows
                        </i>
                    }
                    onClick={this.onClick}
                />
                {/* <ComparePopUp text={text} isOpen={isOpen} /> */}
            </div>
        )
    }
}
