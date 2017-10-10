import React, { Component } from 'react';
import { AddForm } from './components/add';
import { Item } from './components/item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
      modal: false
    };

    this.addTodo = this.addTodo.bind(this);
    // this.handleCompleted = this.handleCompleted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModalAdd = this.handleModalAdd.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  addTodo({ index, desc, priority }) {
    const todoAdd = {
      index,
      desc,
      priority
    };

    const newTodos = this.state.todoItems.slice();

    newTodos.push(todoAdd);

    this.setState({
      todoItems: newTodos
    });
    return todoAdd;
  }

  handleChange({ desc, priority, index }) {
    //update todo Items list using provided index
    const todoItems = [...this.state.todoItems];
    todoItems[index] = { index, desc, priority };
    this.setState({ todoItems });
  }

  handleModalAdd() {
    this.setState({ modal: true });
  }

  handleModalClose() {
    this.setState({ modal: false });
  }

  handleDelete({ index }) {
    var todoItems = [...this.state.todoItems];
    todoItems.splice(todoItems[index], 1);
    this.setState({ todoItems });
  }

  renderDefaultMessage() {
    if (this.state.todoItems.length < 1) {
      return (
        <div className="alert alert-info" role="alert">
          <h2>Welcome to getting $h!t done!!</h2>
          <p>Get started now by adding a new todo item</p>
          <button id="open-add-modal" onClick={this.handleModalAdd}>
            Stop being lazy and add something todo!
          </button>
        </div>
      );
    }
  }

  renderModal() {
    console.log('true');
    return (
      <div className="myModal-wrapper">
        <div className="myModal-content">
          <AddForm addTodo={this.addTodo} />
        </div>
        <div className="myModal-footer">
          <button onClick={this.handleModalClose}>close</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Get $h!t Done</h1>
        <h3>Track all of the things</h3>
        <div className="row">
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">View Todos</div>
              <div className="panel-body">
                {this.renderDefaultMessage()}
                {this.state.todoItems.map((item, index) => {
                  return (
                    <Item
                      index={index}
                      key={index}
                      desc={item.desc}
                      priority={item.priority}
                      date={item.date}
                      handleChange={this.handleChange}
                      handleDelete={this.handleDelete}
                    />
                  );
                })}
                {this.state.modal
                  ? this.renderModal()
                  : console.log('this failed')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
