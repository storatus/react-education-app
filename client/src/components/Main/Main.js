
import React, {Component} from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

/**
 * Main React Class
 * @class Main
 */
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
