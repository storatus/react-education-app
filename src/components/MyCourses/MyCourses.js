import React, {Component} from 'react';
import { Grid,Row,Col,Panel } from 'react-bootstrap';
import './MyCourses.css';



class MyCourses extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(name){

  }


  render() {
    return (
      <Grid fluid>
       <h2>My Courses</h2>

        <Row className="show-grid">
          <Col md={12}>





          </Col>

        </Row>
      </Grid>)
  }
}








export default MyCourses
