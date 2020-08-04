// dependencies
import React from 'react';
// local files
import './List.scss';
import Card from './Card';

function List() {
  return (
    <div className="List">
      <Card
        title="First card"
        content="lorem ipsum"
      />
    </div>
  );
};

export default List;