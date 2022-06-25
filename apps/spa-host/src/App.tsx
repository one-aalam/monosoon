import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Input } from 'ui';
import { SharedFromOne, SharedFromTwo } from './remotes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <React.Suspense fallback="loading">
            <SharedFromOne/>
        </React.Suspense>
        {process.env.REACT_APP_THEME}
        <Input />
        <React.Suspense fallback="loading">
            <SharedFromTwo/>
        </React.Suspense>
        <Button>Boop</Button>
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
