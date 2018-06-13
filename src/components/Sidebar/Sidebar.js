import React, { Component } from 'react';
import './Sidebar.css';
import { Grid,Row,Col } from 'react-bootstrap';


class Sidebar extends Component {

  constructor(props) {
  super(props);
  this.state = {menu: ["All Courses","My Courses","Create Courses","Logout"]}
}

  render() {
    return (

      <nav className="sidebar col-md-2">
        <div className="sidebar-container">
          <ul className="nav flex-column">
            {
                this.state.menu.map((exp,i) => {
                  return <li key={i} className="nav-item">
                        <a className="nav-link active" href="#"> {exp} </a>
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
