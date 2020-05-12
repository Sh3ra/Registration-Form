import React, {Component} from 'react'

class Gender extends Component {
    updateData1 =()=>{
        this.props.onchange("male")
    }
    updateData2 =()=>{
        this.props.onchange("female")
    }
    render() {
        return (
            <div className={this.props.className}>
                <input type="radio" id="male" name="gender" value="male" onClick={this.updateData1}/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"onClick={this.updateData2}/>
                <label htmlFor="female">Female</label>
            </div>
        )
    }
}

export default Gender