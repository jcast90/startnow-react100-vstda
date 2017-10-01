import React, { Component } from 'react';
// import AddForm from './components/add';
// import TodoList from './components/todoList';
class todoItem extends Component {}

class App extends Component {
  constructor(props) {
    super();

    const todoList = [];

    this.state = {
      id: 0,
      description: '',
      priority: '',
      date: ''
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({
      id: this.state.id + 1,
      description: this.state.description,
      priority: this.state.priority,
      date: ''
    });
  }

  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Very Simple Todo App</h1>
        <h3>Track all of the things</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Add New ToDo</div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="new-todo" /> I want to...
                  <textarea
                    className="create-todo-text form-control"
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    id="new-todo"
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority" /> Select Priority
                  <select
                    className="form-control"
                    id="priority"
                    value={this.state.priority}
                    onChange={this.handleChange('priority')}
                  >
                    <option disabled>Select...</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </select>
                </div>
              </div>
              <div className="panel-footer">
                <div className="form-group">
                  <button
                    className="add btn btn-success btn-block"
                    onClick={this.handleAdd}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">View Todos</div>
              <div className="panel-body">
                <div className="alert" role="alert">
                  <label className="form-check-label">
                    <input type="checkbox" />
                  </label>

                  <i className="glyphicon glyphicon-trash icon-right" />
                  <i className="glyphicon glyphicon-edit icon-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
