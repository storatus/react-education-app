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
import CourseUsers from './CourseUsers/CourseUsers'


import { getCourse, deleteCourse, enrollCourse, leaveCourse, cleanCourse } from '../../actions/courseActions';
import { connect } from 'react-redux';


/**
 * Course React Class
 * @class Course
 */
class Course extends Component {


  constructor(props) {
    super(props);

    this.leave = this.leave.bind(this);
    this.enroll = this.enroll.bind(this);
  }


  componentWillReceiveProps(newProps) {
    let course = newProps.course
    if (course == null) {
      this.props.history.push('/NoPage')
    }
  }

  /** leave function inside component  */
  leave(enrollId){
    this.props.leaveCourse(this.props.match.params.courseId,enrollId)
    alert('Course left')
  }

  /** enroll function inside component with obj with user info  */
  enroll(){

    let enrollObj = {
      courseId: this.props.match.params.courseId,
      userId: this.props.auth._id
    }

    this.props.enrollCourse(enrollObj)
    alert('Course Entered')

  }

  /** delete function inside component   */
  deleteCourse(courseId,e){
    this.props.deleteCourse(courseId)
    alert('Course Deleted')
    this.props.history.push('/all-courses')
  }


  componentWillMount(){
    let courseId = this.props.match.params.courseId
    this.props.getCourse(courseId)
  }

  /* When course component is left clean cours in state  */
  componentWillUnmount(){
    this.props.cleanCourse()
  }


  render() {

    let courseData = this.props.course
    let role = this.props.auth.role
    let enrollId = null;

    /*Check if tstudent is enrolled in course*/
    if (Object.keys(courseData).length > 0 && courseData.members.length > 0 && role === 0) {
      enrollId = courseData.members.find(el => el.userId === this.props.auth._id)
      if (enrollId) {
        enrollId = enrollId._id
      }
    }



    return (
      <Grid fluid>
        <h2 >
          Course Overview -  {courseData.name}
        </h2>
        <div className="component-divider"></div>

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

      {/*All 3 subcomponents*/}
      {  Object.keys(courseData).length > 0 && <CourseFiles  role={role} courseId={courseData._id} filePaths={courseData.filePaths}/>}
      <hr></hr>
      {  Object.keys(courseData).length > 0 && <CourseVideos role={role} courseId={courseData._id} videos={courseData.videos}/>}
      <hr></hr>
      {  Object.keys(courseData).length > 0 && <CourseUsers role={role} courseId={courseData._id} members={courseData.members}/>}


      <hr></hr>
        <Row className="margin-up margin-down" >
            <Col md={6}>
              <div className="pull-right">
                {/*Show different buttons depending on being student or admin*/}
                { role === 1 &&
                  <div>
                    <Button  onClick={(e) => this.deleteCourse(courseData._id, e)} bsStyle="danger" className="margin-right" > Delete Course</Button>
                    <Link className="pull-right" to={`/edit/${courseData._id}`}> <Button >Edit Course</Button> </Link>
                  </div>
                }

                { role === 0 &&
                  <div>
                    {!enrollId && <Button  onClick={this.enroll} bsStyle="success" className="margin-right" > Enroll in Course </Button>}
                    {enrollId  && <Button  onClick={(e) => this.leave(enrollId, e)} bsStyle="warning" className="margin-right" > Leave Course </Button>}
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


export default connect(reduxProps, { deleteCourse, getCourse, enrollCourse, leaveCourse,cleanCourse })(Course);
