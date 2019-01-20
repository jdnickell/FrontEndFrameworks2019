import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do dishes',
        completed: false
      },
      {
        id: 2,
        title: 'Wash hair',
        completed: true
      },
      {
        id: 3,
        title: 'Feed the fish',
        completed: false
      }
    ]
  }

  render() {    
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
