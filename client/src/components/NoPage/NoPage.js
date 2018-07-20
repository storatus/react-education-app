import React, {Component} from 'react';
import { Grid,Row,Col,Panel } from 'react-bootstrap';
import './NoPage.css';



class NoPage extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12}>
            <h2>This Page as not found 404</h2>
          </Col>
        </Row>
      </Grid>)
  }
}


export default NoPage
