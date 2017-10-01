import React from 'react';
import EditForm from './edit';

export default props => (
  <div className="alert" role="alert">
    <label className="form-check-label">
      <input type="checkbox" /> data
    </label>

    <i className="glyphicon glyphicon-trash icon-right" />
    <i className="glyphicon glyphicon-edit icon-right" />
  </div>
);
