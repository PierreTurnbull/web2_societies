import React from 'react'

import './cursor.css'
function Cursor(props) {
    return (
        <div
            className="cursor"
            style={{
                top: `${props.cursorParams.y || 0}px`,
                left: `${props.cursorParams.x || 0}px`,
                width: `${props.cursorParams.width}px`,
                height: `${props.cursorParams.height}px`,
            }}
        >
        </div>
    )
}

export default Cursor
