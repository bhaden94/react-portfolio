import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
