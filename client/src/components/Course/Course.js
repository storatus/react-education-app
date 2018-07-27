import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Course.css';

import CourseFiles from './CourseFiles/CourseFiles'
import CourseVideos from './CourseVideos/CourseVideos'

import { getCourse, deleteCourse } from '../../actions/courseActions';
import { connect } from 'react-redux';



class Course extends Component {


  constructor(props) {
    super(props);
  }


  componentWillReceiveProps(newProps) {
    let course = newProps.course
    if (course == null) {
      this.props.history.push('/NoPage')
    }
  }

  enroll(courseId){


    console.log(courseId);


  }


  deleteCourse(courseId,e){
    this.props.deleteCourse(courseId)
    alert('Course Deleted')
    this.props.history.push('/all-courses')
  }


  componentDidMount(){
    let courseId = this.props.match.params.courseId
    this.props.getCourse(courseId)
  }


  render() {

    let courseData = this.props.course
    let role = this.props.auth.role

    return (
      <Grid fluid>
        <h2>
          Course Overview -  {courseData.name}
        </h2>

        <Row >
          <Col md={3}>
            <ul className="no-bullets">
              <li>
                <b>Name: </b> <span> {courseData.name} </span>
              </li>
              <li>
                <b>From: </b> <span> {courseData.dateFrom} </span>
              </li>
              <li>
                <b>To: </b> <span> {courseData.dateTo} </span>
              </li>
              <li>
                <b>Status: </b> <span> {courseData.courseStatus} </span>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="no-bullets">
              <li>
                <b> Description: </b> <p className="present-text"> {courseData.description} </p>
              </li>
            </ul>
          </Col>
        </Row>


      {  Object.keys(courseData).length > 0 && <CourseFiles  role={role} courseId={courseData._id} filePaths={courseData.filePaths}/>}
      <hr></hr>
      {  Object.keys(courseData).length > 0 && <CourseVideos role={role} courseId={courseData._id} videos={courseData.videos}/>}

      <hr></hr>
        <Row className="margin-up" >
            <Col md={6}>
              <div className="pull-right">
                { role === 1 &&
                  <div>
                    <Button  onClick={(e) => this.deleteCourse(courseData._id, e)} bsStyle="danger" className="margin-right" > Delete Course</Button>
                    <Link className="pull-right" to={`/edit/${courseData._id}`}> <Button >Edit Course</Button> </Link>
                  </div>
                }

                { role === 0 &&
                  <div>
                    <Button  onClick={(e) => this.enroll(courseData._id, e)} bsStyle="success" className="margin-right" > Enroll in Course </Button>
                  </div>
                }

          </div>
            </Col>
        </Row>
      </Grid>
    )
  }

}


const reduxProps = state => {
  return ({
    course: state.course.course,
    auth: state.user.authUser
  })
};


export default connect(reduxProps, { deleteCourse, getCourse })(Course);
