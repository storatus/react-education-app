import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';


class Sidebar extends Component {

  constructor(props) {
  super(props);

  this.state = {menu: [
    {name: "Home", url: "/", role: 0},
    {name: "All Courses", url: "/all-courses", role: 0},
    {name: "All Users", url: "/all-users", role: 1},
    {name: "Create Courses", url: "/create-course", role: 1},
    {name: "Create User", url: "/create-user", role: 1},
    // {name: "Logout", url: "/Logout", role: 0},
    {name: "Login", url: "/login", role: 0}

  ]}
}



  generateLinks(menuItems){

    return menuItems.map((exp,i) => {

      return (<li key={i} className="nav-item">
              <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
          </li>)

    })

  }

  render() {
    // 1 is admin // 0 is user
    let role = this.props.auth.role
    let menuItems = this.state.menu.filter(el => {
      if (role === 1) { return true }
      return  el.role === role
    })
    let finalLinks = this.generateLinks(menuItems)




    return (

      <nav className="sidebar col-md-2">
        <div className="sidebar-container">
          <ul className="nav flex-column">
            {finalLinks}
         </ul>
         </div>
      </nav>

    )

  }


}



const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps)(Sidebar);
