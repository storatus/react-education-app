import React, {Component} from 'react';
import {
  Table,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios'
import { connect } from 'react-redux';



/**
 * CourseUsers React Class
 * @class CourseUsers
 */
class CourseUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalMembers: [],
    }

  }



  componentWillReceiveProps(nextProps){
    if (nextProps.members.length !== this.props.members.length) {
      this.callApiMembers(nextProps.members)
    }
  }



  componentWillMount(){
    this.callApiMembers(this.props.members)
  }

  /** connect user ids with database call */
  callApiMembers(members){
    let memberCalls = members.map(el => axios.get(`/api/user/${el.userId}`))

    Promise.all(memberCalls).then(members => {
      let memberData = members.map(el => el.data)
      this.setState({finalMembers: this.generateMembers(memberData)})
    })
  }


  /** Generate members to display in tabular form */
  generateMembers(members){
    return members.map((val,index) => {
        return (
        <tr key={val._id}>
          <td>{val.firstName}</td>
          <td>{val.lastName}</td>
          <td>{val.email}</td>
          <td>enrolled</td>
        </tr>);
    })
  }

  render() {

    return(
      <div>
      <Row>
        <Col md={6}>
          <h3> Course Users </h3>
        </Col>
      </Row>


        <Row className="margin-up">
          <Col md={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.finalMembers}
              </tbody>
          </Table>
          </Col>
        </Row>
        </div>



    )
  }

}


export default connect(null)(CourseUsers);
