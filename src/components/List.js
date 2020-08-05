// dependencies
import React from 'react';
// local files
import './List.scss';
import Card from './Card';

function List(props) {
  // accepts 2 props: props.header, props.cards
  console.log(props.cards);

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => <Card title={card.title} content={card.content} key={card.id} /> )}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
};

export default List;