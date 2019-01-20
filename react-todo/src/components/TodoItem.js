import React, { Component } from 'react'
import './Todo.css'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        let todoStyle = this.props.todo.completed ? 'todo-item todo-item-complete' : 'todo-item todo-item-incomplete';
        return todoStyle;
    }

    getCheckedValue = () => {
        return this.props.todo.completed;
    }
 
    render() {
        // destructure this.props.todo
        const {id, title} = this.props.todo;

        return (
            <div className={this.getStyle()}>
                <p>
                    {/* We don't have redux / state management, so we have to go all the way back to App.js where the state exists */}
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} checked={ this.getCheckedValue() } /> 
                    { title }
                    <span onClick={this.props.deleteTodo.bind(this, id)} className='todo-item-delete'>DELETE</span>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
