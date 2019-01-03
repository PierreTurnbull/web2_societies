import React from 'react'

import './cursor.css'
function Cursor(props) {
    // console.log(props.position);

    return (
        <div
            className="cursor"
            // style={{ top: `${props.cursorPosition.y || 0}px`, left: `${props.cursorPosition.x || 0}px` }}
        >
        </div>
    )
}

export default Cursor
