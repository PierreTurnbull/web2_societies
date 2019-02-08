import React from 'react'

import "./CompareContentBtn.css";

class CompareContentBtn extends React.PureComponent {
    constructor(props) {
        super(props);
        this.compareBtnRef = React.createRef();
    }

    render() {
        const { icon, onMouseEnter, onMouseLeave, onMouseMove, onClick } = this.props;
        return (
            <div
                className={`compareContentBtn`}
                ref={this.compareBtnRef}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMoveCapture={onMouseMove}
                onClick={onClick}
            >
                {
                    icon
                }
            </div>
        )
    }
}
export default CompareContentBtn
