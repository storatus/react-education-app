import React, {Component} from 'react';
import './App.css';

import Main from '../Main/Main';
import Login from '../Login/Login';
import {BrowserRouter, Route, Switch} from "react-router-dom";


/**
 * App React Class
 * @class App
 */
class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}

export default App;
