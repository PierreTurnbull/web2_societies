import React from 'react'
import ReactSVG from 'react-svg'

export default function ArrowIcon(props) {
    
    return (
        <ReactSVG
            src={props.svgUrl}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            svgStyle={{ width: 70, height: 70, fill: 'white', transform: 'rotate(45deg)' }}
            onClick={props.onClick}
        />
    )
}
