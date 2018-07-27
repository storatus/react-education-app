import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {



  constructor(props) {
    super(props);


  }


  render() {
    let role = this.props.auth.role
        return(
          <Navbar className="header" fluid>
            <Navbar.Header>
              <Navbar.Brand className="header-title">
                <a href="#home">Education App</a>
              </Navbar.Brand>
            </Navbar.Header>

          { role === 1 &&  <span className="loggedIn"> Logged as Admin </span>}
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
