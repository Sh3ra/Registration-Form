import React from 'react'

function Label(props) {
    return (
        <div>
            <label className={props.className}>{props.name}</label>
        </div>
    )
}

export default Label
