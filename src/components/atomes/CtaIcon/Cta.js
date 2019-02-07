import React from 'react'

import "./cta.css"
export default function CtaIcon(props) {
    return (
        <button
            className="ctaIcon"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
