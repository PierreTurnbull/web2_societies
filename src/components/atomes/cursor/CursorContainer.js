import React, { Component } from 'react'
import Cursor from './Cursor';
import { TweenLite } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import "./cursorContainer.css"
export default class CursorContainer extends Component {
    constructor(props) {
        super(props);

        this.x = this.props.cursorPosition.x;
        this.y = this.props.cursorPosition.y;

        this.animPost = this.animPost.bind(this);
        this.setBack = this.setBack.bind(this);
    }

    cursorPosition = {
        ...this.props.cursorPosition
    }
    animPost = throttle(() => {
        TweenLite.to(this, .4,
            {
                x: this.props.cursorPosition.x,
                y: this.props.cursorPosition.y,
            }
        );
    }, 10);

    setBack = debounce(() => {
        this.animPost();
    }, 500);

    // mousePositionHanlder = (e) => {
    //     console.log(e.pageX);
    //     this.setState({
    //         cursorPosition: {
    //             x: e.pageX,
    //             y: e.pageY
    //         }
    //     })
    // }
    componentDidMount() {
        this.animPost();
        this.setBack();
    }

    componentDidUpdate() {
        this.animPost();
        this.setBack();
    }

    render() {
        // console.log({ ...this.props });

        this.lastX = this.props.cursorPosition.x;
        this.lastY = this.props.cursorPosition.y;

        return (
            <div className="cursorContainer"
                style={{ top: `${this.y || 0}px`, left: `${this.x || 0}px` }}
            >

                <Cursor cursorPosition={{
                    x: this.x, y: this.y
                }} />
            </div>
        )
    }
}
