import React from 'react'

function Label(props) {
    return (
        <div className={props.className}>
            <label >{props.name}</label>
        </div>
    )
}

export default Label
