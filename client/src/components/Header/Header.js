import React, { Component } from 'react';
import { Navbar,Nav, NavItem } from 'react-bootstrap';


import Sidebar from './../Sidebar/Sidebar'

import { connect } from 'react-redux';
import './Header.css';

/**
 * Header React Class - Ref: based on react-bootstrap examples : https://goo.gl/pBMvSb
 * @class Header
 */
class Header extends Component {

  render() {

    let role = this.props.auth.role
        return(

          <Navbar className="header" inverse collapseOnSelect fluid>
            <Navbar.Header className="navbar-header">
              <Navbar.Brand className="header-title">
                <a>
                  <span> <img className="education-logo" alt="education-logo" src={require("../../education-logo.png")} />  Education App     </span>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />

                <Nav pullRight>
                   <NavItem eventKey={1} href="#">
                     {/*Show admin or student name depending on the role*/}
                     { role === 1 &&  <span className="loggedIn hidden-xs hidden-sm"> Logged as Admin </span>}
                     { role === 0 &&  <span className="loggedIn hidden-xs hidden-sm"> Hello,  {this.props.auth.firstName} </span>}
                   </NavItem>
                </Nav>

            </Navbar.Header>

            <Navbar.Collapse>
              <Sidebar isResponsive={true} />
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
