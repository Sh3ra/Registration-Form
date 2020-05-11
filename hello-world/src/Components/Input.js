import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <div>
                <input type={this.props.type} placeholder={this.props.value} className={this.props.className}></input>
            </div>
        )
    }
}

export default Input
