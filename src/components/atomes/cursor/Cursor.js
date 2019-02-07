import React from 'react'

import './cursor.css'
function Cursor(props) {
    return (
        <div
            className="cursor"
        // style={{
        //     top: `${props.cursorParams.y || 0}px`,
        //     left: `${props.cursorParams.x || 0}px`,
        //     width: `${props.cursorParams.cursorWidth}px`,
        //     height: `${props.cursorParams.cursorWidth}px`,
        //     borderRadius: `${props.cursorParams.borderRadius}%`,
        //     borderColor: props.cursorParams.cursorOpacity && `rgba(255, 255, 255, ${props.cursorParams.cursorOpacity})`,
        //     borderWidth: props.cursorParams.borderWidth && `${props.cursorParams.borderWidth}px`,
        // }}
        >
            <div
                className="cursorInner"
                ref={props.innerCursorRef}
            // style={{
            //     width: `${props.cursorParams.cursorInnerWidth}px`,
            //     height: `${props.cursorParams.cursorInnerWidth}px`,
            //     borderRadius: `${props.cursorParams.borderRadius}%`,
            //     borderWidth: props.cursorParams.borderWidth && `${props.cursorParams.borderWidth}px`,
            // }}
            >
            </div>
            <div className="cursorOuter" ref={props.outerCursorRef} >
            </div>
        </div>
    )
}

export default Cursor
