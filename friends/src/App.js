import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends Page(Protected)</Link>
        </li>
      </ul>
      <h1>FRIENDS!!!</h1>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
