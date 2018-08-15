import React, { Component } from 'react';
import { Navbar,Nav, NavItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {


  render() {
    let role = this.props.auth.role
        return(


          <Navbar className="header" inverse collapseOnSelect fluid>
            <Navbar.Header className="navbar-header">
              <Navbar.Brand className="header-title">
                <a href="#" >


                  <span> <img className="bath-logo" src={require("../../bath_logo.png")} />  Education App     </span>

                </a>

              </Navbar.Brand>





              <Navbar.Toggle />

                <Nav pullRight>
                   <NavItem eventKey={1} href="#">
                     { role === 1 &&  <span className="loggedIn hidden-xs hidden-sm"> Logged as Admin </span>}
                     { role === 0 &&  <span className="loggedIn hidden-xs hidden-sm"> Hello,  {this.props.auth.firstName} </span>}
                   </NavItem>
                 </Nav>

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
