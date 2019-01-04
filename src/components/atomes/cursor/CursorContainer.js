import React, { Component } from 'react'
import Cursor from './Cursor';
import { TweenLite } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import "./cursorContainer.css"
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
class CursorContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        // this.x = this.props.cursorParams.x;
        // this.y = this.props.cursorParams.y;
        // this.width = 50;
        // this.height = 50;

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

    // cursorParams = {
    //     ...this.props.cursorParams
    // }

    // animPos = throttle(() => {
    //     TweenLite.to(this, .4,
    //         {
    //             x: this.props.cursorParams.x,
    //             y: this.props.cursorParams.y,
    //             onUpdate: () => {
    //                 this.setState({
    //                     cursorParams: {
    //                         ...this.state.cursorParams,
    //                         x: this.x,
    //                         y: this.y,
    //                         width: this.width,
    //                         height: this.height
    //                     }
    //                 });
    //             },
    //         },
    //     );
    //     TweenLite.to(this, .4,
    //         {
    //             width: 20,
    //             height: 20,
    //             onUpdate: () => {
    //                 this.setState({
    //                     cursorParams: {
    //                         ...this.state.cursorParams,
    //                         width: this.width,
    //                         height: this.height
    //                     }
    //                 });
    //             },
    //         },
    //     );
    // }, 10);

    // setBack = debounce(() => {
    //     TweenLite.to(this, .4,
    //         {
    //             x: this.props.cursorParams.x,
    //             y: this.props.cursorParams.y,
    //             onUpdate: () => {
    //                 this.setState({
    //                     cursorParams: {
    //                         ...this.state.cursorParams,
    //                         x: this.x,
    //                         y: this.y,
    //                     }
    //                 })
    //             },
    //         }
    //     );

    //     TweenLite.to(this, .4,
    //         {
    //             width: 50,
    //             height: 50,
    //             onUpdate: () => {
    //                 this.setState({
    //                     cursorParams: {
    //                         ...this.state.cursorParams,
    //                         width: this.width,
    //                         height: this.height
    //                     }
    //                 });
    //             },
    //         },
    //     );
    // }, 0);

    componentDidMount() {
        // this.animPos();
        // this.setBack();
    }

    componentWillReceiveProps() {
        // this.animPos();
        // this.setBack();
    }

    shouldComponentUpdate() {
        this.setState({
            cursorParams: {
                x: this.props.cursor_context.state.cursorParams.x,
                y: this.props.cursor_context.state.cursorParams.y
            }
        })
    }

    render() {
        return (
            <div className="cursorContainer">
                <Cursor
                    cursorParams={this.state.cursorParams}
                />
            </div>
        )
    }
}

export default withCursorContext(CursorContainer)