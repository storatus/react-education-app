import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button, ListGroupItem,ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Course.css';


class Course extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.courseId,
      courseData: ''
    }

    this.deleteCourse = this.deleteCourse.bind(this);

  }

  loadCourse(){
      let courseId = this.state.courseId
      axios.get(`/api/course/${courseId}`).then(data => {
          let courseData = data.data;
          this.setState({courseData});
      }).catch((error) => {
        console.log(error);
      })
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



  componentDidMount() {
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

        <Row className="show-grid">
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
            </ul>
          </Col>
          <Col md={3}>
            <ul className="no-bullets">
              <li>
                <b> Description: </b> <span> {courseData.description} </span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
            <Col md={6}>
              <div className="pull-right">


                  <Button  onClick={this.deleteCourse} bsStyle="danger" className="margin-right" > Delete </Button>
                    <Link className="pull-right" to={`/edit/${courseData._id}`}>
                      <Button >Edit</Button>
                    </Link>
              </div>

            </Col>
        </Row>
      </Grid>

    )
  }





}


export default Course
