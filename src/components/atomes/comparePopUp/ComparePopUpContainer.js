import React, { Component } from 'react'
import ComparePopUp from './ComparePopUp';
import CompareContentBtnContainer from '../compareContentBtn/CompareContentBtnContainer';
import { withPopUpContext } from '../../../contexts/popUp/popUp.context';

class ComparePopUpContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
        this.popUpRef = React.createRef();
    }

    onClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.popUpRef);
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);

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
                    onClick={() => this.props.popUp_context.state.tooglePopUp(text)}
                />
            </div>
        )
    }
}

export default withPopUpContext(ComparePopUpContainer)