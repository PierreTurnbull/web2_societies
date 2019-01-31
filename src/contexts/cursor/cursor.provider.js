import React, { Component } from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import { throttle, debounce } from 'lodash';

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
                height: this.height,
                node: null,
                _text: null
            }
        }
    }

    updateCursorParams = (_params) => {
        this.setState({
            ...this.state,
            cursorParams: {
                ...this.state.cursorParams,
                x: _params.x,
                y: _params.y
            }
        });
    }

    hoverHandler = (_node, _text) => {
        this.setState({
            ...this.state,
            cursorParams: {
                ...this.state.cursorParams,
                node: _node ? _node : null,
                text: _node ? _text : null
            }
        });
    }

    render() {
        
        return (
            <CursorContext.Provider
                value={{
                    state: this.state,
                    updateCursorParams: this.updateCursorParams,
                    hoverHandler: this.hoverHandler
                }}
            >
                <ReactCursorPosition
                    className="curIn"
                    onPositionChanged={(props) => this.updateCursorParams(props.position)}
                    onClick={() => console.log('click')}
                    // shouldDecorateChildren={false}
                    activationInteractionMouse={INTERACTIONS.CLICK}
                >
                    {this.props.children}
                </ReactCursorPosition>
            </CursorContext.Provider>
        );
    }
}

export default CursorProvider;