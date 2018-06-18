import React, {Component} from 'react';
import { Grid,Row,Col, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './CreateCourse.css';



class CreateCourse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: true,
      durationFrom: 2,
      durationTo: 3,
      description: '',
      selectStatus: ''

    };

    // This binding is necessary to make `this` work in the callback
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }


  handleInput(e){
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val});

  }


  submitForm(e){


      e.preventDefault();
  }


  render() {
    return (
      <Grid fluid>
        <h2>
          Create Course
        </h2>

        <Row className="show-grid">
          <Col md={6}>
            <Form horizontal onSubmit={this.submitForm}>


              <FormGroup controlId="name">
                <Col componentClass={ControlLabel} sm={3}>
                  Name of Course
                </Col>
                <Col sm={9}>
                  <FormControl onChange={this.handleInput} type="input" placeholder="Name of Course" />
                </Col>
              </FormGroup>


              <FormGroup controlId="durationFrom">
                <Col componentClass={ControlLabel} sm={3}>
                  Duration from
                </Col>
                <Col sm={9}>
                  <FormControl onChange={this.handleInput} type="date" placeholder="Date from" />
                </Col>
              </FormGroup>


              <FormGroup controlId="durationTo">
                <Col componentClass={ControlLabel} sm={3}>
                  Duration to
                </Col>
                <Col sm={9}>
                  <FormControl onChange={this.handleInput} type="date" placeholder="Date to" />
                </Col>
              </FormGroup>


              <FormGroup controlId="description">
                <Col componentClass={ControlLabel} sm={3}>
                  Description
                </Col>
                <Col sm={9}>
                  <FormControl onChange={this.handleInput} componentClass="textarea" placeholder="Date to" />
                </Col>
              </FormGroup>


              <FormGroup controlId="selectStatus">
                <Col componentClass={ControlLabel} sm={3}>
                  Course status
                </Col>
                <Col sm={9}>
                  <FormControl onChange={this.handleInput} componentClass="select" placeholder="Select" >

                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>

                  </FormControl>



                </Col>
              </FormGroup>


              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button className="pull-right" type="submit">
                    Create
                  </Button>
                </Col>
              </FormGroup>
            </Form>


          </Col>

        </Row>
      </Grid>







    )
  }
}








export default CreateCourse
