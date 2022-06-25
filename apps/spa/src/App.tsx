import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'ui';
import { useApi } from 'utils'
import { api } from './lib/api'

function App() {
    const {
        exec: fetchUsers,
        data: users,
        isIdle,
        isPending
    } = useApi(() => api.get(`/api/people`).then(resp => resp.data))

    useEffect(() => {
        fetchUsers()
    }, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Boop</Button>
        {
            isIdle || isPending ?
                <span>loading...</span> : users ?
                    JSON.stringify(users) : null
        }
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
