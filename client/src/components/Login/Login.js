
import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
} from 'react-bootstrap';
import './Login.css';



import { loginUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { removeError } from '../../actions/errorActions';



/**
 * Login React Class - Shows a different view
 * @class Login
 */
class Login extends Component {


  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  componentWillReceiveProps(newProps) {

    if (newProps.errorMesage.err) {
        alert(newProps.errorMesage.err)
        this.props.removeError()
    }

    if (Object.keys(newProps.auth).length > 0 ) {
      this.props.history.push('/')
    }

  }


  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})

  }

  submitForm(e){
    e.preventDefault();
    this.props.loginUser(this.state)
  }


  render(){

    return(
      <Form
        horizontal={true}
        onSubmit={this.submitForm}
        className="form-signin">
        <img
          alt="education-logo-black"
          src={require("../../education-logo-login.png")} />
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter email"
            onChange={this.handleInput}
            />

        </FormGroup>

        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Enter password"
            onChange={this.handleInput}
            />
        </FormGroup>

        <FormGroup className="center-button">
          <Button type="submit" >Login</Button>
        </FormGroup>
      </Form>

  )
  }

}

const reduxProps = state => {
  return ({
    auth: state.user.authUser,
    errorMesage: state.errors.message
  })
};


export default connect(reduxProps, { loginUser, removeError })(Login);
