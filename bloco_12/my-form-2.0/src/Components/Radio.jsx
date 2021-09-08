import React, { Component } from 'react'

class Radio extends Component {
  render() {
    const { name, value, text, id, } = this.props

    return (
      <>
        {text && <span>{ text }</span>}
        <input 
          type="radio" 
          name={ name } 
          id={ id } 
          value={ value } 
        />
        <label htmlFor={ id } >{ value }</label>
      </>
   );
  }
}

export default Radio;