
import React, {Component} from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

import './Main.css';




class Main extends Component {


  render() {
    return (

    <div>
        <Header/>
        <Sidebar/>
        <Container/>
    </div>




  )

  }
}

export default Main;
