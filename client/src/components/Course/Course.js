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
    this.deleteCourse = this.deleteCourse.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    let course = nextProps.course
    if (course == null) {
      this.props.history.push('/NoPage')
    }
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


      {  Object.keys(courseData).length > 0 && <CourseFiles  courseId={courseData._id} filePaths={courseData.filePaths}/>}
      <hr></hr>
      {  Object.keys(courseData).length > 0 && <CourseVideos courseId={courseData._id} videos={courseData.videos}/>}

      <hr></hr>

        <Row className="margin-up" >
            <Col md={6}>
              <div className="pull-right">
                  <Button  onClick={(e) => this.deleteCourse(courseData._id, e)} bsStyle="danger" className="margin-right" > Delete Course</Button>
                    <Link className="pull-right" to={`/edit/${courseData._id}`}>
                      <Button >Edit Course</Button>
                    </Link>
              </div>
            </Col>
        </Row>
      </Grid>
    )
  }

}


const stateToProps = state => {
  return ({course: state.course.course})
};


export default connect(stateToProps, { deleteCourse,getCourse })(Course);
