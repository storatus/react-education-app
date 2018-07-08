import React, {Component} from 'react';
import { Grid,Row,Col,Panel } from 'react-bootstrap';
import './Home.css';



class Home extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(name){
    this.props.history.push(name);
    // console.log(name);
  }


  render() {
    return (
      <Grid fluid>
       <h2>Home</h2>

        <Row className="show-grid">
          <Col md={3}>
            <Panel onClick={(e) => this.handleClick('all-courses', e)}>
                <Panel.Body className="panelPointer">See All Courses</Panel.Body>
            </Panel>
          </Col>
          <Col md={3}>
            <Panel onClick={(e) => this.handleClick('create-course', e)}>
                <Panel.Body className="panelPointer">Create Course</Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>)
  }
}








export default Home
