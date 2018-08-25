import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import { getUsers, deleteUser } from '../../actions/userActions';
import { connect } from 'react-redux';

/**
 * Users React Class - Shows all users
 * @class Users
 */

class Users extends Component {


  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }


  componentDidMount() {
    this.props.getUsers();
  }

  /** delete specific user*/
  deleteUser(userId){

    this.props.deleteUser(userId)
    alert('Users deleted')

  }

  /** generate all users*/
  generateUsers(userData){

    return userData.map(val => {
          return (
          <tr key={val._id}>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>
            <td>{defineRole(val.role)}</td>

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
        <div className="component-divider-sub"></div>

      <Row >
        <Col md={8}>

              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Role</th>
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

/** show student or admin in the table*/
const defineRole = role => {
  return role === 0 ? 'student' : 'admin'
}


const reduxProps = state => {
  return ({users: state.user.users})
};


export default connect(reduxProps, { getUsers, deleteUser })(Users);
