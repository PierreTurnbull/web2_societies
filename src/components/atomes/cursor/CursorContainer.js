import React, { Component } from 'react'
import Cursor from './Cursor';
import { TweenLite } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

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
            }
        );
        TweenLite.to(this, .4,
            {
                y: this.props.cursorPosition.y,
            }
        );
        console.log("move");

    }, 10);

    setBack = debounce(() => {
        this.animPost()
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

    // componentDidMount() {

    // }

    render() {
        this.animPost();
        this.setBack();
        // console.log({ ...this.props });

        this.lastX = this.props.cursorPosition.x;
        this.lastY = this.props.cursorPosition.y;

        return (
            <Cursor cursorPosition={{
                x: this.x, y: this.y
            }} />
        )
    }
}
