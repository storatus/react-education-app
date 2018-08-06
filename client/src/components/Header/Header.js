import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {


  render() {
    let role = this.props.auth.role
        return(
          <Navbar className="header" fluid>
            <Navbar.Header>
              <Navbar.Brand className="header-title">
                <a href="#home">Education App - BUCS Department</a>
              </Navbar.Brand>
            </Navbar.Header>

          { role === 1 &&  <span className="loggedIn"> Logged as Admin </span>}
          { role === 0 &&  <span className="loggedIn"> Hello,  {this.props.auth.firstName} </span>}

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
