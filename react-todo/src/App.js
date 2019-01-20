import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Do dishes',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Wash hair',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Feed the fish',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
    }) })
  }

  deleteTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
