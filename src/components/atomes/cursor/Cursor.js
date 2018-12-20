import React from 'react'

import './cursor.css'
function Cursor(props) {
    // console.log(props.position);

    return (
        <div className="cursor" style={{ top: `${props.position[1]}px`, left: `${props.position[0]}px` }}></div>
    )
}

export default Cursor
