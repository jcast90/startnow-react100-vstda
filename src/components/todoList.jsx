import React from 'react';
import Default from './items/default';
import LowPriority from './items/low';
import MediumPriority from './items/medium';
import HighPriority from './items/high';

export default props => (
  <div className="col-md-8">
    <div className="panel panel-default">
      <div className="panel-heading">View Todos</div>
      <div className="panel-body">
        <Default />
        <LowPriority />
        <MediumPriority />
        <HighPriority />
      </div>
    </div>
  </div>
);
