import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './lib/api'

import { Button } from 'ui';

function App() {
    const [users, setUsers] = useState([])
    const [usersLoading, setUsersLoading] = useState(true)

    useEffect(() => {
        api.get(`/api/people`).then(res => {
            setUsers(res.data)
            setUsersLoading(false)
        });
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Boop</Button>
        {
            usersLoading ?
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
