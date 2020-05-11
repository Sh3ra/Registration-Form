import React, {Component} from 'react'

class BirthDate extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <input type="date" id="birthday" name="birthday"/>
            </div>
        )
    }
}

export default BirthDate