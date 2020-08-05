// dependencies
import React from 'react';
// local files
import './App.scss';
import List from './List';

function App(props) {

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(item => (
          <List
            key={item.id}
            header={item.header}
            cards={item.cardIds.map(id => props.store.allCards[id])}
          />
        ))}
      </div>
    </main>
  );
};

export default App;