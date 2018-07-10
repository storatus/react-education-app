import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap';
import './CreateCourse.css';
import axios from 'axios';

class CreateCourse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      dateFrom: '',
      dateTo: '',
      description: '',
      courseStatus: 'enabled'
    };

    // This binding is necessary to make `this` work in the callback
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }




  loadCourse(courseId){
    return axios.get(`/api/course/${courseId}`);
  }


  assignData(data){

    this.setState({
      _id: data._id,
      name: data.name,
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      description: data.description,
      courseStatus: data.courseStatus
    });


  }

  componentDidMount() {

    this.paramId = this.props.match.params.courseId
    let courseId = this.paramId;

    if (this.paramId) {
        this.loadCourse(courseId).then(data => {
            let courseData = data.data;
            this.assignData(courseData)
        }).catch(err => console.log(err))
    }

  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val});
  }


  submitForm(e) {
    //  Should i copy this.state ?
    // let stateObj = JSON.stringify(this.state)
    let stateObj = this.state
    let request = this.paramId ? '/api/update' : '/api/create'


    axios.post(request, stateObj)
    .then(response => {
      this.paramId ? alert('Changes made') : alert('created')
    })
    .catch(err => console.log(err))


    e.preventDefault();
  }

  render() {

    let courseStatus = this.paramId ? 'Edit Course' : 'Create Course';
    let buttonStatus = this.paramId ? 'Save Changes' : 'Create Course';


    return (
      <Grid fluid={true}>
      <h2>
        {courseStatus} Course
      </h2>

      <Row className="show-grid">
        <Col md={6}>
          <Form horizontal={true} onSubmit={this.submitForm}>

            <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={3}>
                Name of Course
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="input" value={this.state.name} placeholder="Name of Course"/>
              </Col>
            </FormGroup>

            <FormGroup controlId="dateFrom">
              <Col componentClass={ControlLabel} sm={3}>
                Duration from
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="date" value={this.state.dateFrom} placeholder="Date from"/>
              </Col>
            </FormGroup>

            <FormGroup controlId="dateTo">
              <Col componentClass={ControlLabel} sm={3}>
                Duration to
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="date" value={this.state.dateTo} placeholder="Date to"/>
              </Col>
            </FormGroup>

            <FormGroup controlId="description">
              <Col componentClass={ControlLabel} sm={3}>
                Description
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} value={this.state.description} componentClass="textarea" placeholder="Date to"/>
              </Col>
            </FormGroup>

            <FormGroup controlId="courseStatus">
              <Col componentClass={ControlLabel} sm={3}>
                Course status
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} value={this.state.courseStatus} componentClass="select" placeholder="Select">

                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>

                </FormControl>

              </Col>
            </FormGroup>

            <FormGroup>
              <Col  sm={12}>

                  <Button className="pull-right"  type="submit">
                    {buttonStatus}
                  </Button>

              </Col>
            </FormGroup>
          </Form>

        </Col>

      </Row>
    </Grid>)
  }
}

export default CreateCourse
