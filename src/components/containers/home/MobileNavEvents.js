import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Swipeable from 'react-swipeable'

class MobileNavEvents extends Component {
    swipedUp = (e, deltaY, isFlick) => {
        console.log(deltaY)
        deltaY > 150 && this.props.history.push(this.props.path)
    }

    swipedLeft = (e, deltaY, isFlick) => {
        console.log(deltaY)
        deltaY > 150 && this.props.onNext()
    }

    swipedRight = (e, deltaY, isFlick) => {
        console.log(deltaY)
        deltaY < -150 && this.props.onPrev()
    }

    render() {
        return (
            <Swipeable
                onSwipedUp={this.swipedUp}
                onSwipedLeft={this.swipedLeft}
                onSwipedRight={this.swipedRight}
                style={{ height: "100%", width: "100%", position: "absolute", top: '0', left: '0' }}
            >
                You can swipe here!
          </Swipeable>
        )
    }
}

export default withRouter(MobileNavEvents)