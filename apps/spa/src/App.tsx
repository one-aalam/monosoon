import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'ui';

function App() {
    const [users, setUsers] = useState([])
    const [usersLoading, setUsersLoading] = useState(true)

    useEffect(() => {
       fetch(`${process.env.REACT_APP_API_URL || ''}/api/people`).
       then(resp => {
            if(!resp.ok) {
                throw new Error(`HTTP error! Status: ${ resp.status }`)
            }
            return resp.json()
       }).
       then(
            (json) => {
                setUsers(json)
                setUsersLoading(false)
            }
        )
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
