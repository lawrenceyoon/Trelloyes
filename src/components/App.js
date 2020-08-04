// dependencies
import React from 'react';
// local files
import './App.scss';
import List from './List';

function App() {
  return (
    <main className="App">

      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>

      <div className="App-list">
        <List />
      </div>

    </main>
  );
};

export default App;