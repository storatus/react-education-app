// Ref: Example seen from https://goo.gl/oKVi33

import React from 'react';
import { connect } from 'react-redux';


export default function(InComponent,role = null){
  class Auth extends React.Component {

    componentWillMount(){
      let auth = this.props.auth

      if (Object.keys(auth).length === 0) {
        alert('You must be logged In to see this Page')
        this.props.history.push('/login')
        return
      }

      if (role) {
        if (auth.role !== 1) {
          alert('You must be an administrator to see this page')
          this.props.history.push('/')
        }
      }
    }

    render() {
      return (<InComponent {...this.props}/>)
    }
  }

  const reduxProps = state => {
    return ({
      auth: state.user.authUser
    })
  };

  return connect(reduxProps)(Auth);
}
