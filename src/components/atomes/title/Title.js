import React from 'react'

export default function Title(props) {
    const _class = props.className ? `${props.className} ${props.h}` : props.h
    return (
        <props.h className={_class} >{props.text}</props.h>
    )
}
