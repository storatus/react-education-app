import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { getCourses } from '../../actions/courseActions';
import { connect } from 'react-redux';


/**
 * MyCourses React Class - shows all courses from a student perspective - Almost same code as courses
 * @class MyCourses
 */
class MyCourses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  /** Calculate materials*/
  calcMaterial(videos, filePaths){
    return videos.length + filePaths.length
  }

  /** Generate courses that apply to the current user */
  generateCourses(courseData){

    let auth = this.props.auth


    let filterCourses = courseData.filter(el => {
      if (el.courseStatus === 'enabled') {
        let index = el.members.findIndex(val => val.userId === auth._id)
        return index > -1
      }
    })


    return filterCourses.map(val => {
          return (
          <tr key={val._id}>
            <td>{val.name}</td>
            <td>{this.calcMaterial(val.videos, val.filePaths)}</td>
            <td>{val.members.length}</td>
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
        <h2> My Courses </h2>
        <div className="component-divider-sub">
        </div>

        <Row>
          <Col md={8}>
            <Table
              responsive
              striped
              bordered
              condensed
              hover>
              <thead>
                <tr>
                  <th>
                    Course name
                  </th>
                  <th>
                    Total material
                  </th>
                  <th>
                    People enrolled
                  </th>
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


export default connect(reduxProps, { getCourses })(MyCourses);
