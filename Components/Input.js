import React, { Component } from 'react'

class Input extends Component {
    updateData =(event)=>{
        this.props.onchange(event.target.value)
    }
    render() {
        return (
            <React.Fragment>
                <input type={this.props.type} placeholder={this.props.value} className={this.props.className} onChange={this.updateData}/>
            </React.Fragment>
        )
    }
}

export default Input
