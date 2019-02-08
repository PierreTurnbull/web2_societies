import React from 'react';
import ComparePopUp from '../../components/atomes/comparePopUp/ComparePopUp';
export const PopUpContext = React.createContext('popup');

class PopUpProvider extends React.PureComponent {
    constructor(props) {
        super(props);;
        this.state = {
            isOpen: false,
            text: '',
            tooglePopUp: (text) => {
                this.setState({
                    ...this.state,
                    isOpen: !this.state.isOpen,
                    text
                });
            },
        }
    }

    render() {

        return (
            <PopUpContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
                {this.state.isOpen && <ComparePopUp text={this.state.text} onClick={this.state.tooglePopUp} />}
            </PopUpContext.Provider>
        );
    }
}

export default PopUpProvider;