import React, { Component } from 'react'
import Input from './Components/Input'
import Select from './Components/Select'
import Radio from './Components/Radio'
import Textarea from './Components/Textarea'

import states from './states'
import './app.css'

class App extends Component {
  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this)

    this.state ={
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      habitation: '',
      resume: '',
      job: '',
      description: '',
    }

  }

    handleOnChange({ target }) {
      const { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value 
      this.setState({
        [name] : value
      });
    }

  render() {
    const { name, email, cpf, adress, city, resume, job, description } = this.state
    console.log(name.toUpperCase())
    return (
      <form className="App">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Input type="text" name="name" maxLength="40"  text="Nome " required onChange ={this.handleOnChange} value={ (name.toUpperCase()) }/>
          <Input type="text" name="email" maxLength="50"  text="email " required onChange ={this.handleOnChange} value={ email }/>
          <Input type="text" name="cpf" maxLength="11"  text="CPF " required onChange ={this.handleOnChange} value={ cpf }/>
          <Input type="text" name="adress" maxLength="200"  text="Endereço " required onChange ={this.handleOnChange} value={ adress }/>
          <Input type="text" name="city" maxLength="28"  text="Cidade " required onChange ={this.handleOnChange} value={ city }/>
          <Select text="Estado " id="state" name="state" options={ states } onChange ={this.handleOnChange} />
          <div onChange ={this.handleOnChange}>
          <Radio name="habitation" id="casa" value="Casa" text="Moradia " />
          <Radio name="habitation" id="ap" value="Apartamento" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Dados último emprego</legend>
          <Textarea name="resume" text="Resumo do Currículo " required maxLength="1000" onChange ={this.handleOnChange} value={ resume }/>
          <Textarea name="job" text="Cargo " required maxLength="40" onChange ={this.handleOnChange} value={ job }/>
          <Textarea name="description" text="Descrição do cargo " required maxLength="500" onChange ={this.handleOnChange} value={ description }/>
        </fieldset>
      </form>
   );
  }
}

export default App;
