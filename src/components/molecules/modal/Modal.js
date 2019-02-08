import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import './modal.css'
class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.getElementById('modalPortal').appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById('modalPortal').removeChild(this.el);
    }

    render() {
        const { title, text } = this.props;
        return (
            <div className="modal">
                <div className="content">
                    <div className="header">
                        {
                            title
                        }
                        <i
                            className="material-icons"
                            onClick={() => this.props.history.push('/')}
                        >
                            close
                        </i>
                    </div>
                    {
                        text
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Modal)