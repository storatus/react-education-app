
import React, {Component} from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';


class Main extends Component {

  render() {
    return (
    // This might change because I have to do things responsive

    <div> 
      <Header/>
      <div className="row">
        <Sidebar/>
        <Container/>
      </div>
    </div>

  )

  }
}

export default Main;
