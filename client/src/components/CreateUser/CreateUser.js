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
import './CreateUser.css';
import {errorMessages} from '../../helpers';

import { addUser } from '../../actions/userActions';
import { connect } from 'react-redux';


class CreateUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      firstNameValid: null,
      lastNameValid: null,
      emailValid: null,
      passwordValid: null,
      isSend: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  isValid(){

    let checkValid = true

    if (this.state.firstName === '') {
      this.setState({ firstNameValid: 'First name cannot be empty' })
      checkValid = false
    }else{
      this.setState({firstNameValid: null})
    }

    if (this.state.lastName === '') {
      this.setState({ lastNameValid: 'Last name cannot be empty' })
      checkValid = false
    }else{
      this.setState({lastNameValid: null})
    }

    if (this.state.email === '') {
      this.setState({ emailValid: 'Email can not be empty'})
      checkValid = false
    }else{
      this.setState({emailValid: null})
    }

    if (this.state.password === '') {
      this.setState({ passwordValid: 'Password field cannot be empty'})
      checkValid = false
    }else{
      this.setState({passwordValid: null})
    }

    return checkValid;
  }




  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})

    if (this.state.isSend === true) {
      this.isValid()
    }
  }

  cleanForm(){
    // this.setState({
    //   name: '',
    //   dateFrom: '',
    //   dateTo: '',
    //   description: '',
    //   courseStatus: 'enabled'
    // })
    // alert('Course created')
  }


  submitForm(e) {
    e.preventDefault();
    this.setState({isSend: true})
    if (this.isValid() === false) { return false; }

    // this.props.addCourse(this.state)
    // this.cleanForm()

  }




  render() {


    return (
      <Grid fluid={true}>
      <h2> Create User </h2>

      <Row className="show-grid">
        <Col md={6}>
          <Form horizontal={true} onSubmit={this.submitForm}>

            <FormGroup controlId="firstName" validationState={this.state.firstNameValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                First name
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="input" value={this.state.firstName} placeholder="First name"/>
                <p className="error">{this.state.firstNameValid}</p>
              </Col>

            </FormGroup>

            <FormGroup controlId="lastName" validationState={this.state.lastNameValid != null ?  'error' : null} >
              <Col componentClass={ControlLabel} sm={3}>
                Last name
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="input" value={this.state.lastName} placeholder="Last name"/>
                  <p className="error">{this.state.lastNameValid}</p>
              </Col>
            </FormGroup>

            <FormGroup controlId="email" validationState={this.state.emailValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                Email
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} type="email" value={this.state.email} placeholder="email"/>
                  <p className="error">{this.state.emailValid}</p>
              </Col>
            </FormGroup>

            <FormGroup controlId="password" validationState={this.state.passwordValid != null ?  'error' : null}>
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={9}>
                <FormControl onChange={this.handleInput} value={this.state.password} type="password" placeholder="password"/>
                <p className="error">{this.state.passwordValid}</p>
              </Col>
            </FormGroup>


            <FormGroup>
              <Col  sm={12}>
                  <Button className="pull-right"  type="submit">
                    Create User
                  </Button>
              </Col>
            </FormGroup>
          </Form>

        </Col>

      </Row>
    </Grid>)
  }
}


export default connect(null, { addUser })(CreateUser);
