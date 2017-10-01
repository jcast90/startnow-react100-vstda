import React from 'react';
import App from './../App';

export default props => (
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
          >
            <option selected disabled>
              Select...
            </option>
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
);
