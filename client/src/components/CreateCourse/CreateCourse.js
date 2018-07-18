import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';
import './CreateCourse.css';
import {errorMessages} from '../../helpers';

import axios from 'axios';

class CreateCourse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      dateFrom: '',
      dateTo: '',
      description: '',
      courseStatus: 'enabled',
      nameValid: null,
      dateFromValid: null,
      dateToValid: null,
      descriptionValid: null

    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }

  isValid(){

    let checkValid = true

    if (this.state.name.length < 6) {
      this.setState({ nameValid: errorMessages['name']['length'] })
      checkValid = false
    }else{
      this.setState({nameValid: null})
    }


    if (this.state.dateFrom === '') {
      this.setState({ dateFromValid: errorMessages['dateFrom']['length'] })
      checkValid = false
    }else{
      this.setState({dateFromValid: null})
    }

    if (this.state.dateTo === '') {
      this.setState({ dateToValid: errorMessages['dateTo']['length']})
      checkValid = false
    }else{
      this.setState({dateToValid: null})
    }

    if (this.state.description.length < 6) {
      this.setState({ descriptionValid: errorMessages['description']['length']})
      checkValid = false
    }else{
      this.setState({descriptionValid: null})
    }

    return checkValid;
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
        axios.get(`/api/course/${courseId}`).then(data => {
            let courseData = data.data;
            this.assignData(courseData)
        }).catch(err => console.log(err))
    }

  }

  handleInput(e) {

    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
    this.isValid()

  }




  submitForm(e) {
    e.preventDefault();


    let stateObj = this.state
    let request = this.paramId ? '/api/update' : '/api/create'


    if (this.isValid() == false) { return false; }


    axios.post(request, stateObj)
    .then(response => {

      if (this.paramId) {
        alert('Changes made');
      }else{
        alert('created')
        this.props.history.push('/all-courses')
      }
    })
    .catch(err => console.log(err))


  }



  render() {

    let courseStatus = this.paramId ? 'Edit Course' : 'Create Course';
    let buttonStatus = this.paramId ? 'Save Changes' : 'Create Course';


    return (
      <Grid fluid={true}>
      <h2>
        {courseStatus}
      </h2>

      <Row className="show-grid">
        <Col md={6}>
          <Form horizontal={true} onSubmit={this.submitForm}>

            <FormGroup controlId="name" validationState={this.state.nameValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                Name of Course
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="input" value={this.state.name} placeholder="Name of Course"/>
                <p className="error">{this.state.nameValid}</p>
              </Col>

            </FormGroup>

            <FormGroup controlId="dateFrom" validationState={this.state.dateFromValid != null ?  'error' : null} >
              <Col componentClass={ControlLabel} sm={3}>
                Duration from
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="date" value={this.state.dateFrom} placeholder="Date from"/>
                  <p className="error">{this.state.dateFromValid}</p>

              </Col>
            </FormGroup>

            <FormGroup controlId="dateTo" validationState={this.state.dateToValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                Duration to
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="date" value={this.state.dateTo} placeholder="Date to"/>
                  <p className="error">{this.state.dateToValid}</p>
              </Col>
            </FormGroup>

            <FormGroup controlId="description" validationState={this.state.descriptionValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                Description
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} value={this.state.description} componentClass="textarea" placeholder="Date to"/>
                <p className="error">{this.state.descriptionValid}</p>
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
