
import React, {Component} from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

import './Main.css';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem

} from 'react-bootstrap';


class Main extends Component {


  render() {
    return (

    <div>
        <Header/>
        <Sidebar/>
        <Container/>
          {/*              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 >Dashboard</h1>
                          </div>
                        </main>*/}
    </div>




  )

  }
}

export default Main;
