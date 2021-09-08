import React, { Component } from 'react'
import Input from './Input'
import './form.css'

class Form extends Component {
    constructor () {
        super()

        this.state={
            email: '',
            password: '',
            textArea: '',
            nivel: '1',
            agreement: false,
            formularioComErros: false,
        }

        this.handleInput = this.handleInput.bind(this)
    }
  
    handleError() {
        const { email, password, textArea, agreement } = this.state
        const errors = [
            email.length > 0,
            password.length > 0,
            textArea.length > 0,
            agreement
        ]
        
        const result = errors.some((field) => field === false)
        this.setState({
            formularioComErros: result
        })
    }

    handleInput({ target }) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [name]: value
        }, () => { this.handleError() })
    }
    
    render () {
        const { email, password, textArea, formularioComErros } = this.state

        return (
            <form action="">
                <fieldset>

                <label htmlFor="">
                    Nível  
                <select name="nivel" onChange={this.handleInput}>
                    <option value="1">Nível 1</option>
                    <option value="2">Nível 2</option>
                    <option value="3">Nível 3</option>
                </select>
                </label>
                <label htmlFor="email">
                    Email
                <Input type="email" name="email" id="email" onChange={this.handleInput} value={email}/>
                </label>
                <label htmlFor="password">
                    Senha
                <Input type="password" name="password" id="password" onChange={this.handleInput} value={password}/>
                </label>
                <label htmlFor="textArea">
                    Texto
                <textarea name="textArea" id="textArea" cols="30" rows="10" onChange={this.handleInput} value={textArea}></textarea>
                </label>
                </fieldset>
                <label htmlFor="agreement">
                <input type="checkbox" name="agreement" id="agreement" onClick={this.handleInput}/>
                    Concorda com os dados acima?
                </label>
                <input type="file" name="file" id="file" />
                <span>{formularioComErros? 'Preencha todos os campos' : ''}</span>
            </form>
        )
    }
}

export default Form