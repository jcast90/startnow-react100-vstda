import React, { Component } from 'react';
import AddForm from './components/add';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Very Simpoe Todo App</h1>
        <h3>Track all of the things</h3>
        <div className="row">
          <AddForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
