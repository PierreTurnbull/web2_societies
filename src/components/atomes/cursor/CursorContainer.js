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
        this.defaultCursorSize = 41;
        this.cursorWidth = this.defaultCursorSize;
        this.cursorHeight = this.defaultCursorSize;
        this.defaultCursorInnerSize = 8;
        this.cursorInnerWidth = this.defaultCursorInnerSize;
        this.cursorInnerHeight = this.defaultCursorInnerSize;
        this.cursorOpacity = 1;

        this.animPos = this.animPos.bind(this);
        this.setBack = this.setBack.bind(this);

        this.node = this.props.cursor_context.state.cursorParams.node;
        this.clickAnimation = TweenLite.to(this, .3, {
            paused: true,
            cursorHeight: 100,
            cursorWidth: 100,
            cursorOpacity: 0,
            borderWidth: 0,
            overwrite: true,
            onUpdate: () => {
                this.setState({
                    cursorParams: {
                        ...this.state.cursorParams,
                        borderRadius: this.borderRadius,
                        cursorOpacity: this.cursorOpacity,
                        borderWidth: this.borderWidth,
                        cursorWidth: this.cursorWidth,
                        cursorHeight: this.cursorHeight,
                    }
                })
            },
            onComplete: () => {
                this.setState({
                    cursorParams: {
                        ...this.state.cursorParams,
                        borderRadius: this.borderRadius,
                        cursorOpacity: this.cursorOpacity,
                        borderWidth: this.borderWidth,
                        cursorWidth: this.cursorWidth,
                        cursorHeight: this.cursorHeight,
                    }
                })
            },
            ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
        });
        this.state = {
            cursorParams: {
                x: this.x,
                y: this.y,
                cursorWidth: this.cursorWidth,
                cursorHeight: this.cursorHeight,
                cursorInnerHeight: this.cursorInnerHeight,
                cursorInnerWidth: this.cursorInnerWidth,
                text: ""
            }
        }
    }

    cursorAnimsTo = (param) => {
        switch (param) {
            case "LINK":
                TweenLite.to(this, .3,
                    {
                        cursorHeight: 20,
                        cursorWidth: 20,
                        cursorInnerHeight: 5,
                        cursorInnerWidth: 5,
                        cursorOpacity: .1,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - 20 - Math.sin(this.angle) * this.hypotenuse / 5,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    cursorInnerHeight: this.cursorInnerHeight,
                                    cursorOpacity: this.cursorOpacity,
                                    cursorInnerWidth: this.cursorInnerWidth,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
            case "LOGO":
                TweenLite.to(this, .5,
                    {
                        cursorHeight: this.node.getBoundingClientRect().height + 10,
                        cursorWidth: this.node.getBoundingClientRect().width + 10,
                        cursorInnerHeight: 5,
                        cursorInnerWidth: 5,
                        borderWidth: 0,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().width / 2) - Math.sin(this.angle) * this.hypotenuse / 10,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 10,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    borderWidth: this.borderWidth,
                                    cursorHeight: this.cursorHeight,
                                    cursorInnerHeight: this.cursorInnerHeight,
                                    cursorInnerWidth: this.cursorInnerWidth,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
            case "NONE":
                TweenLite.to(this, .5,
                    {
                        cursorHeight: 10,
                        cursorWidth: 10,
                        borderWidth: 0,
                        x: this.props.cursor_context.state.cursorParams.x,
                        y: this.props.cursor_context.state.cursorParams.y,
                        onUpdate: () => {

                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    borderWidth: this.borderWidth,
                                    cursorHeight: this.cursorHeight,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
            default:
                TweenLite.to(this, .5,
                    {
                        cursorHeight: this.node.getBoundingClientRect().height,
                        cursorWidth: this.node.getBoundingClientRect().height,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
        }
    }

    cursorAnimsBack = (param) => {
        switch (param) {
            case "LINK":
                TweenLite.to(this, .5,
                    {
                        cursorHeight: 20,
                        cursorWidth: 20,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - 20 - Math.sin(this.angle) * this.hypotenuse / 5,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    cursorOpacity: this.cursorOpacity,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    }, 0)
                break;
            case "LOGO":
                TweenLite.to(this, .5,
                    {
                        cursorHeight: this.node.getBoundingClientRect().height + 10,
                        cursorWidth: this.node.getBoundingClientRect().width + 10,
                        borderWidth: 0,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().width / 2) - Math.sin(this.angle) * this.hypotenuse / 10,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 10,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    borderWidth: this.borderWidth,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
            case "NONE":
                TweenLite.to(this, .5,
                    {
                        cursorHeight: 0,
                        cursorWidth: 0,
                        borderWidth: 0,
                        x: this.props.cursor_context.state.cursorParams.x,
                        y: this.props.cursor_context.state.cursorParams.y,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    borderWidth: this.borderWidth,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    });
                break;
            default:
                TweenLite.to(this, .2,
                    {
                        cursorHeight: this.node.getBoundingClientRect().height,
                        cursorWidth: this.node.getBoundingClientRect().height,
                        cursorInnerHeight: 0,
                        cursorOpacity: 1,
                        cursorInnerWidth: 0,
                        x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
                        y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
                        onUpdate: () => {
                            this.setState({
                                cursorParams: {
                                    ...this.state.cursorParams,
                                    cursorWidth: this.cursorWidth,
                                    cursorHeight: this.cursorHeight,
                                    cursorInnerHeight: this.cursorInnerHeight,
                                    cursorInnerWidth: this.cursorInnerWidth,
                                    cursorOpacity: this.cursorOpacity,
                                    x: this.x,
                                    y: this.y,
                                }
                            });
                        },
                        ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                    }, 0);
                break;
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
                    cursorHeight: this.defaultCursorSize,
                    cursorWidth: this.defaultCursorSize,
                    cursorInnerHeight: 8,
                    cursorInnerWidth: 8,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                x: this.x,
                                y: this.y,
                                cursorWidth: this.cursorWidth,
                                cursorHeight: this.cursorHeight,
                                cursorInnerHeight: this.cursorInnerHeight,
                                cursorInnerWidth: this.cursorInnerWidth,
                            }
                        });

                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                },
            )
            : this.cursorAnimsTo(this.text)
    }, 0);

    setBack = debounce(() => {
        !this.node
            ? TweenLite.to(this, .5,
                {
                    x: this.props.cursor_context.state.cursorParams.x,
                    y: this.props.cursor_context.state.cursorParams.y,
                    cursorHeight: this.defaultCursorSize,
                    cursorWidth: this.defaultCursorSize,
                    borderRadius: 50,
                    cursorOpacity: 0.3,
                    borderWidth: 2,
                    onUpdate: () => {
                        this.setState({
                            cursorParams: {
                                ...this.state.cursorParams,
                                x: this.x,
                                y: this.y,
                                borderRadius: this.borderRadius,
                                cursorOpacity: this.cursorOpacity,
                                borderWidth: this.borderWidth,
                                cursorWidth: this.cursorWidth,
                                cursorHeight: this.cursorHeight,
                            }
                        })
                    },
                    ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
                }
            )
            : this.cursorAnimsBack(this.text)
    }, 0);

    componentDidMount() {
        this.animPos();
        this.setBack();

        document.body.onmousedown = () => this.clickHandler();
    }

    clickHandler = () => {
        console.log("CLICK", this.clickAnimation.isActive());

        this.text !== "HOLD" && this.clickAnimation.play();

    }

    componentWillReceiveProps() {

        this.animPos();
        this.setBack();
        this.node && this.text === "HOLD" ? this.setState({ text: this.text }) : this.setState({ text: "" });
    }

    render() {
        this.node = this.props.cursor_context.state.cursorParams.node;
        this.text = this.props.cursor_context.state.cursorParams.text;

        return (
            <div className={"cursorContainer"}>
                <Cursor
                    cursorParams={this.state.cursorParams}
                    text={this.state.text}
                />
            </div>
        )
    }
}

export default withCursorContext(CursorContainer)