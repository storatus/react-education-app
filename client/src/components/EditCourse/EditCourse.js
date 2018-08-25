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
import {errorMessages} from '../../helpers';

import { getCourse, updateCourse } from '../../actions/courseActions';
import { connect } from 'react-redux';


/**
 * EditCourse React Class
 * @class EditCourse
 */
class EditCourse extends Component {

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
      descriptionValid: null,
      isSend: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }

  /** Check validation */
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


  /** Assign all data from form before sending */
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



  handleInput(e) {

    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
    if (this.state.isSend === true) {
      this.isValid()
    }
  }




  submitForm(e) {
    e.preventDefault();

    let courseData = this.state
    this.setState({isSend: true})
    if (this.isValid() === false) { return false; }

    this.props.updateCourse(courseData)
    alert('Course Edited')

  }

  componentWillReceiveProps(newProps) {
    let course = newProps.course
    if (Object.keys(course).length !== 0) {
        this.assignData(course)
    }
  }



  componentDidMount() {
    let courseId = this.props.match.params.courseId
    this.props.getCourse(courseId)
  }



  render() {

    return (
      <Grid fluid={true}>
      <h2> Edit Course </h2>
      <div className="component-divider-sub"></div>

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
                <FormControl onChange={this.handleInput} value={this.state.description} componentClass="textarea" placeholder="Description"/>
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

                  <Button className="pull-right"  type="submit"> Save Changes </Button>

              </Col>
            </FormGroup>
          </Form>

        </Col>

      </Row>
    </Grid>)
  }
}

const reduxProps = state => {
  return ({course: state.course.course})
};

export default connect(reduxProps, { getCourse,updateCourse })(EditCourse);
