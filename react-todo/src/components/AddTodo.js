import React, { Component } from 'react';

export class AddTodo extends Component {
    //This is a component level state
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
    return (
      <form className='main-form' onSubmit={this.onSubmit}>
        <input
            type='text' 
            name='title' 
            placeholder='Add Todo..'
            value={this.state.title}
            onChange={this.onChange}
        />
        <input 
            type='submit' 
            value='Add Item'
            className='btn-submit' 
            placeholder='Add Todo..'
        />       
      </form>
    );
  }
}

export default AddTodo;
