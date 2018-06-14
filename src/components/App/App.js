import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';


import { Grid,Row,Col } from 'react-bootstrap';





class App extends Component {
  render() {
    return (
      // This might change because I have to do things responsive
      <div className="App">
        <Header/>
        <div className="row">
          <Sidebar/>
          <Container/>
        </div>

      </div>)



  }
}

export default App;
