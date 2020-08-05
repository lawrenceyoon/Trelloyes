// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// local files
import App from './components/App';
import STORE from './store';

const inject = document.getElementById("root");
ReactDOM.render(<App store={STORE} />, inject);