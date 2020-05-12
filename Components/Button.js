import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div>
                <button className={this.props.className} type={this.props.type}>Sign Up</button>
            </div>
        )
    }
}

export default Button