import React from 'react';
import Default from './items/default';
import Item from './items/item';

export default props => (
  <div className="col-md-8">
    <div className="panel panel-default">
      <div className="panel-heading">View Todos</div>
      <div className="panel-body">
        <Default />
        <Item />
      </div>
    </div>
  </div>
);
