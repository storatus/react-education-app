import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';

import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {


  render() {
    let role = this.props.auth.role
        return(


          <Navbar className="header" inverse collapseOnSelect fluid>
            <Navbar.Header className="navbar-header">
              <Navbar.Brand className="header-title">
                <a href="#" >Education App - BUCS Department</a>

              </Navbar.Brand>

              { role === 1 &&  <span className="loggedIn hidden-xs hidden-sm"> Logged as Admin </span>}
              { role === 0 &&  <span className="loggedIn hidden-xs hidden-sm"> Hello,  {this.props.auth.firstName} </span>}

              <Navbar.Toggle />

            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
              </Nav>
            </Navbar.Collapse>



          </Navbar>

      )
  }
}

const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps)(Header);
