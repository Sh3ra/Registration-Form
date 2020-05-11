import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <React.Fragment>
                <input type={this.props.type} placeholder={this.props.value} className={this.props.className}></input>
            </React.Fragment>
        )
    }
}

export default Input
