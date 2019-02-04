import React from 'react'

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    width: '100w',
    height: '100vh',
    transition: 'all .5s ease'
}

const Gradient = (props) => {
    return (
        <div
            style={{ ...style, background: props.background }}
        >
        </div>
    )
}

export default Gradient
