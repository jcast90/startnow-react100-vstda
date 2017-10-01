import React from 'react';

export default props => (
  <div className="edit-wrapper">
    <div className="form-group">
      <label htmlFor="description" />Description
      <textarea classname="update-todo-text form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="date" />Due date
      <input className="update-todo-date form-control" id="date" />
      <label htmlFor="priority" /> Priority
      <select className="form-control" id="priority">
        <option selected disabled>
          Select...
        </option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    <button className="update-todo btn btn-success">Save</button>
  </div>
);
