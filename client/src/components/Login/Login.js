
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
  // HelpBlock
} from 'react-bootstrap';
import './Login.css';




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


  handleInput(e){
      console.log(e);

  }

  submitForm(e){

    this.props.history.push('/')
    e.preventDefault();
  }






  render() {
    return (
    // This might change because I have to do things responsive


      <Grid>
        <Row className="margin-top-form"  >
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
              {/*<FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>*/}

              </FormGroup>


              <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="text"
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

export default Login;
