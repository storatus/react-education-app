import React, {Component} from 'react';
import { Table,Grid, Row, Col } from 'react-bootstrap';


class Courses extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Grid fluid>
        <h2>
          Create Course
        </h2>

    <Row className="show-grid">
      <Col md={8}>
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Course name</th>
                    <th>People enrolled</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>



    )
  }





}


export default Courses
