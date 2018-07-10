import React, { Component } from 'react';
import './Sidebar.css';
// import { Grid,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Sidebar extends Component {

  constructor(props) {
  super(props);

  this.state = {menu: [
    {name: "Home", url: "/"},
    {name: "All Courses", url: "/all-courses"},
    {name: "My Courses", url: "/my-courses"},
    {name: "Create Courses", url: "/create-course"},
    {name: "Logout", url: "/Logout"}
  ]}
}

  render() {
    return (

      <nav className="sidebar col-md-2">
        <div className="sidebar-container">
          <ul className="nav flex-column">
            {
                this.state.menu.map((exp,i) => {

                  return <li key={i} className="nav-item">
                          <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
                      </li>

                })
              }


         </ul>
         </div>
      </nav>

    )

  }


}



export default Sidebar;
