import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Courses.css';


class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = {courseData: []}
  }

  loadCourses(){

    axios.get('/api/courses')
    .then(data => {
      let courseData = data.data.map((val,index) => {
        return (
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>0</td>
          <td className="align-middle">
            <Link to={`/course/${val._id}`}>
              <Button >See course</Button>
            </Link>
          </td>
        </tr>);
      });

      this.setState({courseData})
    })
    .catch(err=> console.log(err, "This is an error"))


  }

  componentDidMount() {
    this.loadCourses();

  }

  render() {
    return (
      <Grid fluid>
        <h2>
          All courses
        </h2>
    <Row >
      <Col md={8}>
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Course name</th>
                    <th>People enrolled</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courseData}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }

}


export default Courses
