import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, name, maxLength, required, text, onChange } = this.props

    return (
      <label htmlFor={ name }>
        { text }
        <input 
          type={ type } 
          name={ name } 
          maxLength={ maxLength } 
          required={ required }
          onChange={ onChange }
        />
      </label>
   );
  }
}

export default Input;