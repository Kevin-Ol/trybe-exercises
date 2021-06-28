import React, { Component } from 'react'

class Select extends Component {
  render() {
    const { id, name, options, text, onChange } = this.props

    return (
        <label htmlFor={ id }>
          { text }
          <select name={ name } id={ id } onChange={ onChange }>
            { options.map((option) => <option value={option.uf} key={option.uf}>{option.nome}</option>) }
          </select>
        </label>
   );
  }
}

export default Select;