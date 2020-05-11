import React, {Component} from 'react'

class Gender extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Female</label>
            </div>
        )
    }
}

export default Gender