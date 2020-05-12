import React, {Component} from 'react'

class BirthDate extends Component {
    updateData =(event)=>{
        this.props.onchange(event.target.value)
    }
    render() {
        return (
            <div className={this.props.className}>
                <input type="date" id="birthday" name="birthday" onChange={this.updateData}/>
            </div>
        )
    }
}

export default BirthDate