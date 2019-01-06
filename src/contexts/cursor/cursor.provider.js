import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';

export const CursorContext = React.createContext('cursor');

class CursorProvider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.x = 100;
        // this.x = this.props.cursorParams.x;
        this.y = 100;
        // this.y = this.props.cursorParams.y;
        this.width = 50;
        this.height = 50;

        // this.animPos = this.animPos.bind(this);
        // this.setBack = this.setBack.bind(this);

        this.state = {
            cursorParams: {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    }

    updateCursorParams = (_params) => {
        this.setState({
            ...this.state,
            cursorParams: _params
        });
    }

    render() {
        console.log("PROVIDER", this.props);
        return (
            <CursorContext.Provider
                value={{
                    state: this.state,
                    updateCursorParams: this.updateCursorParams
                }}
            >
                <ReactCursorPosition className="curIn">
                    {this.props.children}
                </ReactCursorPosition>
            </CursorContext.Provider>
        );
    }
}

export default CursorProvider;