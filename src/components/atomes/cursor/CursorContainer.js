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
        this.x = this.props.cursor_context.state.cursorParams.x;
        this.y = this.props.cursor_context.state.cursorParams.y;
        this.defaultCursorSize = 3;
        this.width = this.defaultCursorSize;
        this.height = this.defaultCursorSize;

        this.animPos = this.animPos.bind(this);
        this.setBack = this.setBack.bind(this);

        this.node = this.props.cursor_context.state.cursorParams.node;

        this.state = {
            cursorParams: {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    }

    animPos = throttle(() => {
        this.targetPosition = this.node && {
            left: this.node.getBoundingClientRect().left + this.node.getBoundingClientRect().width / 2,
            top: this.node.getBoundingClientRect().top + this.node.getBoundingClientRect().height / 2,
        }
        this.distance = this.node && {
            x: this.targetPosition.left - this.props.cursor_context.state.cursorParams.x,
            y: this.targetPosition.top - this.props.cursor_context.state.cursorParams.y
        }
        this.angle = this.node && Math.atan2(this.distance.x, this.distance.y)
        this.hypotenuse = this.node && Math.sqrt(this.distance.x * this.distance.x + this.distance.y * this.distance.y)
        !this.node
            ? TweenLite.to(this, .5,
                {
                    x: this.props.cursor_context.state.cursorParams.x,
                    y: this.props.cursor_context.state.cursorParams.y,
                    height: this.defaultCursorSize,
                    width: this.defaultCursorSize,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                x: this.x,
                                y: this.y,
                                width: this.width,
                                height: this.height
                            }
                        });

                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                },
            )
            : TweenLite.to(this, .2,
                {
                    height: this.node.getBoundingClientRect().height,
                    width: this.node.getBoundingClientRect().height,
                    x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
                    y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                width: this.width,
                                height: this.height,
                                x: this.x,
                                y: this.y,
                            }
                        });
                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                },
            );

        // TweenLite.to(this, .5,
        //     {
        //         width: 20,
        //         height: 20,
        //         onUpdate: () => {
        //             this.setState({
        //                 cursorParams: {
        //                     ...this.state.cursorParams,
        //                     width: this.width,
        //                     height: this.height
        //                 }
        //             });
        //         },
        //     },
        // );
    }, 0);

    setBack = debounce(() => {
        !this.node
            ? TweenLite.to(this, .5,
                {
                    x: this.props.cursor_context.state.cursorParams.x,
                    y: this.props.cursor_context.state.cursorParams.y,
                    height: this.defaultCursorSize,
                    width: this.defaultCursorSize,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                x: this.x,
                                y: this.y,
                                width: this.width,
                                height: this.height,
                            }
                        })
                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                }
            )
            : TweenLite.to(this, .2,
                {
                    height: this.node.getBoundingClientRect().height,
                    width: this.node.getBoundingClientRect().height,
                    x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
                    y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                width: this.width,
                                height: this.height,
                                x: this.x,
                                y: this.y,
                            }
                        });
                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                }, 0,
            );

        // TweenLite.to(this, .4,
        //     {
        //         width: 50,
        //         height: 50,
        //         onUpdate: () => {
        //             this.setState({
        //                 cursorParams: {
        //                     ...this.state.cursorParams,
        //                     width: this.width,
        //                     height: this.height
        //                 }
        //             });
        //         },
        //     },
        // );
    }, 0);

    componentDidMount() {
        this.animPos();
        this.setBack();
    }

    componentWillReceiveProps() {
        // this.setState({
        //     ...this.state,
        //     cursorParams: {
        //         ...this.state.cursorParams,
        //         x: this.x,
        //         y: this.y
        //     }

        // })

        this.animPos();
        this.setBack();
    }

    // shouldComponentUpdate() {
    //     // this.setState({
    //     //     cursorParams: {
    //     //         x: this.props.cursor_context.state.cursorParams.x,
    //     //         y: this.props.cursor_context.state.cursorParams.y
    //     //     }
    //     // })
    // }

    render() {
        this.node = this.props.cursor_context.state.cursorParams.node;
        // console.log(this.props.cursor_context.state.cursorParams.x, this.props.cursor_context.state.cursorParams.y);

        return (
            <div className={"cursorContainer"}>
                <Cursor
                    cursorParams={this.state.cursorParams}
                />
            </div>
        )
    }
}

export default withCursorContext(CursorContainer)