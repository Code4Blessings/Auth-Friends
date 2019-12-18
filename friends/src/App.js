import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
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
      <Switch>
         <PrivateRoute path="/protected" component={FriendList} />
         <Route path="/login" component={Login} />
         <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
