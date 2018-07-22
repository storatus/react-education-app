import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import configStore from './configStore'



ReactDOM.render(
    <BrowserRouter>
      <Provider store={configStore}>
        <App/>
      </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
