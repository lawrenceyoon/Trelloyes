// dependencies
import React from 'react';
// local files
import './Card.scss';

function Card(props) {
  // accepts 2 props: props.title, props.content
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;