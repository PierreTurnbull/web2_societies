import React from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import CursorContainer from '../../components/atomes/cursor/CursorContainer';

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
            isMobile: false,
            cursorParams: {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
                node: null,
                _text: null
            },
            updateCursorParams: (_params) => {
                this.setState({
                    ...this.state,
                    cursorParams: {
                        ...this.state.cursorParams,
                        x: _params.x,
                        y: _params.y
                    }
                });
            },
            hoverHandler: (_node, _text) => {
                this.setState({
                    ...this.state,
                    cursorParams: {
                        ...this.state.cursorParams,
                        node: _node ? _node : null,
                        text: _node ? _text : null
                    }
                });
            }
        }
    }

    componentDidMount() {
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize = () => {
        if (window.innerWidth <= 768) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }

    render() {

        return (
            <CursorContext.Provider
                value={{
                    state: this.state
                }}
            >
                <ReactCursorPosition
                    className="curIn"
                    onPositionChanged={(props) => this.state.updateCursorParams(props.position)}
                    onClick={() => console.log('click')}
                    shouldDecorateChildren={false}
                    activationInteractionMouse={INTERACTIONS.CLICK}
                >
                    {this.props.children}
                </ReactCursorPosition>
                {
                    !this.state.isMobile && <CursorContainer />
                }
            </CursorContext.Provider>
        );
    }
}

export default CursorProvider;