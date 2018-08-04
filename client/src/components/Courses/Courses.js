import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { getCourses } from '../../actions/courseActions';
import './Courses.css';
import { connect } from 'react-redux';



class Courses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }


  calcMaterial(videos, filePaths){
    return videos.length + filePaths.length
  }


  generateCourses(courseData){
    let role = this.props.auth.role
    let filterCourses = courseData.filter(el => {
      if (role === 1) { return true }
      else {
        if (el.courseStatus === 'enabled') {
          return true
        }
      }
    })

    return filterCourses.map(val => {


          return (
          <tr key={val._id}>
            <td>{val.name}</td>
            <td>{this.calcMaterial(val.videos, val.filePaths)}</td>
            <td>{val.members.length}</td>
            {role === 1 && <td>{val.courseStatus}</td>}
            <td className="align-middle">
              <Link to={`/course/${val._id}`}>
                <Button >See course</Button>
              </Link>
            </td>
          </tr>)



        })
  }




  render() {
    let courses = this.generateCourses(this.props.courses)
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
                    <th>Total material</th>
                    <th>People enrolled</th>
                    {this.props.auth.role === 1 && <th>Status</th>}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}


const reduxProps = state => {
  return ({
    courses: state.course.courses,
    auth: state.user.authUser
  })
};


export default connect(reduxProps, { getCourses })(Courses);
