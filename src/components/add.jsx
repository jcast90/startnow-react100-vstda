import React from 'react';

export default props => (
  <div className="col-md-4">
    <div className="panel panel-default">
      <div className="panel-heading">Add New ToDo</div>
      <div className="panel-body">
        <div className="form-group">
          <label htmlFor="new-todo" /> I want to...
          <textarea className="form-control" id="new-todo" rows="3" />
        </div>
        <div className="form-group">
          <label htmlFor="priority" /> Select Priority
          <select className="form-control" id="priority">
            <option selected disabled>
              Select...
            </option>
            <option>None</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
      <div className="panel-footer">
        <div className="form-group">
          <button className="add btn btn-success btn-block">Add</button>
        </div>
      </div>
    </div>
  </div>
);
