
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
} from 'react-bootstrap';
import './Login.css';



import { loginUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { removeError } from '../../actions/errorActions';



// MOST PEOPLE USE AUTH0

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

    // I have to work on this

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




  render() {
    return (
      <Grid>
        <Row className="margin-top-form">
          <Col xsOffset={4}  sm={4}>
            <Form horizontal={true} onSubmit={this.submitForm}>
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
            </Col>
          </Row>
        </Grid>

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
