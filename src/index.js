import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectionBar from './connectionbar/ConnectionBar'

ReactDOM.render(
  <React.StrictMode>
    <ConnectionBar/>
    <App login = "mtwangyugeng"/>
  </React.StrictMode>,
  document.getElementById('root')
);