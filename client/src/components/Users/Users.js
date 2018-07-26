import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import { getUsers, deleteUser } from '../../actions/userActions';
import './Users.css';
import { connect } from 'react-redux';



class Users extends Component {


  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }


  componentDidMount() {
    this.props.getUsers();
  }


  deleteUser(userId){

    this.props.deleteUser(userId)
    alert('Users deleted')

  }


  generateUsers(userData){

    return userData.map(val => {
          return (
          <tr key={val._id}>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>

            <td className="align-middle">
                <Button onClick={(e) => this.deleteUser(val._id, e)} bsStyle="danger" >Delete User</Button>
            </td>
          </tr>)
        })

  }

  render() {
    let users = this.generateUsers(this.props.users)
    return (
      <Grid fluid>
        <h2>
          All Users
        </h2>
      <Row >
        <Col md={8}>
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}


const reduxProps = state => {
  return ({users: state.user.users})
};


export default connect(reduxProps, { getUsers, deleteUser })(Users);
