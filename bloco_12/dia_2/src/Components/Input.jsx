import React, { Component } from 'react'


class Input extends Component {
    render() {
        const { type, name, id, onChange, value} = this.props

        return(
            <input type={type} name={name} id={id} onChange={onChange} value={value}/>
        )
    }
}

export default Input
