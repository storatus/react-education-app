import React, {Component} from 'react';
import './App.css';

import Main from '../Main/Main';
import Login from '../Login/Login';

import {Route, Switch} from "react-router-dom";



class App extends Component {

  componentDidMount(){}


  render() {
    return (
    // This might change because I have to do things responsive
    <div className="App">

      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
      </Switch>


    </div>

  )

  }
}

export default App;
