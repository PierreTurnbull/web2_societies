import React, { Component } from 'react'
import CompareContentBtnContainer from '../compareContentBtn/CompareContentBtnContainer';
import { withPopUpContext } from '../../../contexts/popUp/popUp.context';

class ComparePopUpContainer extends Component {
    render() {
        const { text } = this.props;

        return (
            <div style={{ position: "relative" }}>
                <CompareContentBtnContainer
                    icon={
                        <i className="material-icons">
                            compare_arrows
                        </i>
                    }
                    onClick={() => this.props.popUp_context.state.tooglePopUp(text)}
                />
            </div>
        )
    }
}

export default withPopUpContext(ComparePopUpContainer)