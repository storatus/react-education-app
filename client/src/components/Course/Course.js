import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Course.css';

import CourseFiles from './CourseFiles/CourseFiles'
import CourseVideos from './CourseVideos/CourseVideos'




class Course extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.courseId,
      courseData: '',
    }
    this.deleteCourse = this.deleteCourse.bind(this);
  }




  loadCourse(){
      let courseId = this.state.courseId

      axios.get(`/api/course/${courseId}`)
      .then(data => {
          let courseData = data.data;
          this.setState({courseData});
      }).catch((error) => { this.props.history.push('/NoPage') })

  }


  deleteCourse(e){
    let courseId = this.state.courseId;
    axios.delete(`/api/delete/${courseId}`)
    .then(res => {
        let status = res.data.status
        if (status) {
          alert('You have deleted')
          this.props.history.push('/all-courses')
        }
    })
    .catch(err => console.log(err))
  }

  componentWillMount() {
    this.loadCourse()
  }


  render() {


    // Alternatively I can also
    let courseData = this.state.courseData;

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
              <li>

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


      {  courseData && <CourseFiles  courseId={this.state.courseId} filePaths={courseData.filePaths}/>}
      <hr></hr>
      {  courseData && <CourseVideos courseId={this.state.courseId} videos={courseData.videos}/>}

      <hr></hr>

        <Row className="margin-up" >
            <Col md={6}>
              <div className="pull-right">
                  <Button  onClick={this.deleteCourse} bsStyle="danger" className="margin-right" > Delete Course</Button>
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


export default Course
