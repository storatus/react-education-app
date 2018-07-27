import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import configStore from './configStore'
import {setAuthToken} from './helpers'

import jwtDecode from 'jwt-decode';
import { setUser } from './actions/userActions';


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken) // This is placing it into headers
  configStore.dispatch(setUser(jwtDecode(localStorage.jwtToken))) // putting it equal in state
}



ReactDOM.render(
    <BrowserRouter>
      <Provider store={configStore}>
        <App/>
      </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
