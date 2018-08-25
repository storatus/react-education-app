/**
 * index.js module
 * @module index.js
 */

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

// Ref: Example seen from https://goo.gl/6WBzMn
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  configStore.dispatch(setUser(jwtDecode(localStorage.jwtToken)))
}


ReactDOM.render(
    <BrowserRouter>
      <Provider store={configStore}>
        <App/>
      </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
