import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      cliques1: 0,
      cliques2: 0,
      cliques3: 0,
    }
    
    this.printConsole = this.printConsole.bind(this)
    this.printConsole2 = this.printConsole2.bind(this)
    this.printConsole3 = this.printConsole3.bind(this)
  }
  
  printConsole() {
    this.setState((state) => ({cliques1: state.cliques1 + 1}), () => {
      if (this.state.cliques1 % 2 === 0) {
        console.log('verde')
      }
    })
  }
  
  printConsole2() {
    this.setState((state) => ({cliques2: state.cliques2 + 1}), () => {
      if (this.state.cliques2 % 2 === 0) {
        console.log('verde')
      }
    })
  }
  
  printConsole3() {
    this.setState((state) => ({cliques3: state.cliques3 + 1}), () => {
      if (this.state.cliques3 % 2 === 0) {
        console.log('verde')
      }
    })
  }

  render () {
      return (
        <div className="App">
        <button onClick={this.printConsole}>{this.state.cliques1}</button>
        <button onClick={this.printConsole2}>{this.state.cliques2}</button>
        <button onClick={this.printConsole3}>{this.state.cliques3}</button>
      </div>
    );
  }
}

export default App;
