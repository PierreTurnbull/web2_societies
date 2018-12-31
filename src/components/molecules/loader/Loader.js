import React, { Component } from 'react'

import './loader.css'
export default class Loader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            slideState: null
        }
    }

    toggleMainLoader = () => {
        this.setState({ isLoading: !this.state.isLoading });
    }

    slideIn = (_param) => {
        // this.setState({ isReady: !this.state.isReady });
        this.setState({ isReady: _param });
    }

    render() {
        const _class = this.props.isLoading ? "slideIn" : "slideOut";
        console.log("LOADER", this.props.isLoading);
        
        return (
            <div
                className={`loaderContainer ${_class}`}
            >
                <h1>
                    loading
                </h1>
                <div className="slideEl"></div>
            </div>
        )
    }
}
