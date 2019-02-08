import React, { Component } from 'react'
import CompareContentBtn from './CompareContentBtn';
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
import { TweenLite } from 'gsap/TweenMax';
import VisibilitySensor from 'react-visibility-sensor';

class CompareContentBtnContainer extends Component {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
        this.anim = null;
        this.state = {
            isVisible: false
        }
    }

    componentDidUpdate() {
        this.btn = this.btnRef.current && this.btnRef.current.compareBtnRef.current
    }

    onVisibilityChange = (isVisible) => {
        this.setState({
            isVisible
        });

        this.anim = isVisible && TweenLite.fromTo(this.btn, .5,
            {
                x: 100,
                width: 100,
                height: 20,
                ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
            },
            {
                x: 0,
                width: 55,
                height: 55,
                ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")'
            }
        );
    }

    onMouseEnter = () => {
        // this.anim = TweenLite.fromTo(this.btn, 1,
        //     { x: 0, ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
        //     { x: -20, ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        // );
    }

    onMouseLeave = () => {
        // this.anim = TweenLite.fromTo(this.btn, 1,
        //     { x: 0, ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' },
        //     { x: 20, ease: 'CustomEase.create("custom", "M0,0 C0.21,0 0.074,0.458 0.252,0.686 0.413,0.893 0.818,1 1,1")' }
        // );
    }

    render() {
        const { icon } = this.props;
        return (
            <VisibilitySensor
                onChange={this.state.isVisible === false && this.onVisibilityChange}
                offset={{ top: 10 }}
            >
                <CompareContentBtn
                    ref={this.btnRef}
                    icon={icon}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.props.onClick}
                />
            </VisibilitySensor>
        )
    }
}

export default withCursorContext(CompareContentBtnContainer)