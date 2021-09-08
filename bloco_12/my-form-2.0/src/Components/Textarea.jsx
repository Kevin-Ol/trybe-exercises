import React, { Component } from 'react'

class Textarea extends Component {
  render() {
    const { name, maxLength, required, rows = 10, cols = 30, text, value, onChange } = this.props

    return (
      <label htmlFor={ name }>
        { text }
        <textarea 
            name={ name } 
            id={ name } 
            cols={ cols } 
            rows={ rows }
            maxLength = {maxLength}
            required = { required }
            value={value}
            onChange={ onChange }
        ></textarea>
      </label>
   );
  }
}

export default Textarea;