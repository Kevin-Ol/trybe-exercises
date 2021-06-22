import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Comer', 'Estudar', 'Dormir']
const teste2 = tasks.map((task) => Task(task))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{ tasks.map((task) => Task(task)) }</ul>
        <ul>{ tasks }</ul>
        <ul>{ Task('teste') }</ul>
        <ul>{ teste2 }</ul>
      </header>
    </div>
  );
}

export default App;
