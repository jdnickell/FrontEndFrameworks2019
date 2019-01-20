import React from 'react';
import { Link } from 'react-router-dom';

//functional component acts as only returning the 'render' method of a class lifecycle
export default function Header() {
  return (
    <header className='todo-header'>
        <h1>TodoList</h1>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link>
    </header>
  )
}