import React from 'react'
import Cursor from './Cursor';
import { TweenLite } from "gsap/TweenMax";
import { throttle, debounce } from 'lodash';

import "./cursorContainer.css"
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
class CursorContainer extends React.Component {
    constructor(props) {
        super(props);

        this.x = this.props.cursor_context.state.cursorParams.x;
        this.y = this.props.cursor_context.state.cursorParams.y;
        this.defaultCursorSize = 41;
        this.cursorWidth = this.defaultCursorSize;
        this.cursorHeight = this.defaultCursorSize;
        this.defaultCursorInnerSize = 8;
        this.cursorInnerWidth = this.defaultCursorInnerSize;
        this.cursorInnerHeight = this.defaultCursorInnerSize;
        this.cursorOpacity = 1;

        this.innerCursorRef = React.createRef();
        this.outerCursorRef = React.createRef();
        this.animPos = this.animPos.bind(this);
        this.setBack = this.setBack.bind(this);

        this.node = this.props.cursor_context.state.cursorParams.node;
    }

    clickAnimation = () => {
        // TweenLite.fromTo(this.outerCursorRef.current, 0, {
        //     opacity: 1,
        //     height: 41,
        //     width: 41,
        //     borderWidth: 2,
        //     x: this.props.cursor_context.state.cursorParams.x,
        //     y: this.props.cursor_context.state.cursorParams.y,
        //     ease: 'CustomEase.create("custom", "M0,0 C0.554,0.014 0.482,0.4 0.516,0.51 0.654,0.957 0.896,0.996 1,1")'
        // },
        //     {
        //         opacity: 1,
        //         height: 51,
        //         width: 51,
        //         borderWidth: 10,
        //         x: this.props.cursor_context.state.cursorParams.x,
        //         y: this.props.cursor_context.state.cursorParams.y,
        //         ease: 'CustomEase.create("custom", "M0,0 C0.554,0.014 0.482,0.4 0.516,0.51 0.654,0.957 0.896,0.996 1,1")'
        //     }
        // );
        // TweenLite.to(this.innerCursorRef.current, .1, {
        //     opacity: 1,
        //     height: 5,
        //     width: 5,
        //     x: this.props.cursor_context.state.cursorParams.x,
        //     y: this.props.cursor_context.state.cursorParams.y
        // });
    };

    defaultAnim = () => {
        TweenLite.to(this.outerCursorRef.current, .5, {
            opacity: .5,
            height: 41,
            width: 41,
            borderWidth: 1,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y,
            ease: 'CustomEase.create("custom", "M0,0 C0.554,0.014 0.482,0.4 0.516,0.51 0.654,0.957 0.896,0.996 1,1")'
        });
        TweenLite.to(this.innerCursorRef.current, .3, {
            opacity: 1,
            height: 8,
            width: 8,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
    };

    ctaAnim = () => {
        TweenLite.to(this.outerCursorRef.current, .5, {
            height: this.node.getBoundingClientRect().height,
            width: this.node.getBoundingClientRect().height,
            opacity: 1,
            x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
            y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
        });
        TweenLite.to(this.innerCursorRef.current, .5, {
            height: 0,
            width: 0,
            opacity: 0,
            x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
            y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
        });
    };

    linkAnim = () => {
        console.log("lonk");

        TweenLite.to(this.outerCursorRef.current, .5, {
            height: 51,
            width: 51,
            opacity: .5,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
        TweenLite.to(this.innerCursorRef.current, .5, {
            height: 5,
            width: 5,
            opacity: 1,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
    };
    logoAnim = () => {
        TweenLite.to(this.outerCursorRef.current, .3, {
            height: 5,
            width: 5,
            opacity: 0,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
        TweenLite.to(this.innerCursorRef.current, .5, {
            height: 5,
            width: 5,
            opacity: 1,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
    };
    iconAnim = () => {
        TweenLite.to(this.outerCursorRef.current, .3, {
            height: this.node.getBoundingClientRect().height,
            width: this.node.getBoundingClientRect().height,
            opacity: 1,
            x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
            y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
        });
        TweenLite.to(this.innerCursorRef.current, .5, {
            height: 0,
            width: 0,
            opacity: 0,
            x: this.props.cursor_context.state.cursorParams.x,
            y: this.props.cursor_context.state.cursorParams.y
        });
    };
    iconAnimBack = () => {
        TweenLite.to(this.outerCursorRef.current, .3, {
            height: this.node.getBoundingClientRect().height,
            width: this.node.getBoundingClientRect().height,
            opacity: 1,
            x: this.node.getBoundingClientRect().x + (this.node.getBoundingClientRect().height / 2) - Math.sin(this.angle) * this.hypotenuse / 5,
            y: this.node.getBoundingClientRect().y + (this.node.getBoundingClientRect().height / 2) - Math.cos(this.angle) * this.hypotenuse / 5,
        });
    };

    cursorAnimsTo = (param) => {
        switch (param) {
            case "LINK":
                this.linkAnim();
                break;
            case "LOGO":
                this.logoAnim();
                break;
            case "COMPARE":
                this.logoAnim();
                break;
            case "ICON":
                this.iconAnim();
                break;
            default:
                this.ctaAnim();
                break;
        }
    }

    cursorAnimsBack = (param) => {
        switch (param) {
            case "LINK":
                this.linkAnim();
                break;
            case "LOGO":
                this.logoAnim();
                break;
            case "COMPARE":
                this.logoAnim();
                break;
            case "ICON":
                this.iconAnimBack();
            default:
                this.ctaAnim();
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
            ? this.defaultAnim()
            : this.cursorAnimsTo(this.text)
    }, 0);

    setBack = debounce(() => {
        !this.node
            ? this.defaultAnim()
            : this.cursorAnimsBack(this.text)
    }, 0);

    componentDidMount() {
        this.animPos();
        this.setBack();
        // document.body.onmousedown = () => this.clickHandler();
    }

    // clickHandler = () => {
    //     this.clickAnimation();
    // }

    componentWillReceiveProps() {
        this.animPos();
        this.setBack();
    }

    render() {
        this.node = this.props.cursor_context.state.cursorParams.node;
        this.text = this.props.cursor_context.state.cursorParams.text;

        return (
            <div className={"cursorContainer"}>
                <Cursor
                    innerCursorRef={this.innerCursorRef}
                    outerCursorRef={this.outerCursorRef}
                />
            </div>
        )
    }
}

export default withCursorContext(CursorContainer)