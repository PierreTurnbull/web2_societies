import React from 'react'

import "./quote.css"
export default function Quote(props) {
  return (
    <p
      className={`quote ${props.variant}`}
      style={{...props.style}}
    >
      {props.text}
    </p>
  )
}
