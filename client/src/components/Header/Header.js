import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';



class Header extends Component {
  render() {
        return(
          <Navbar className="header" fluid>
            <Navbar.Header>
              <Navbar.Brand className="header-title">
                <a href="#home">Education App</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>



      )
  }
}

export default Header;
