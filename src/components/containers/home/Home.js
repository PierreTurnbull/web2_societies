import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThumbnailContainer from '../../molecules/thumbnail/ThumbnailContainer';
import { withRouter } from 'react-router'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export class Home extends Component {
    constructor(props) {
        super(props);

        // this.props.history.listen((location, action) => {
        //     // this.onRouteChange();
        //     this.props.toggleMainLoader();
        //     // setTimeout(() => {
        //         // this.setState({pathname: location.pathname})
        //     // }, 1000);
        //     // console.log(location, action);
        // });
    }


    state = {
        pathname: '/'
    }

    // onRouteChange = () => {
    //     this.setState({ routeChanged: true });
    //     setTimeout(() => {
    //         this.setState({ routeChanged: false });
    //     }, 1000);
    // }

    render() {
        return (
            <div>
                {/* <TransitionGroup className="home">
                    <CSSTransition
                        key={this.state.pathname}
                        timeout={500}
                        classNames="overlay"
                        // unmountOnExit
                    >
                        <div className={`${this.state.routeChanged === true ? 'overlay slideIn' : 'overlay'}`}>
                        </div>
                    </CSSTransition>
                </TransitionGroup> */}
                <ThumbnailContainer />
            </div>
        )
    }
}

export default withRouter(Home)
