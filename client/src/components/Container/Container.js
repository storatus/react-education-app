import React, { Component } from 'react';
import { Route,Switch,  } from 'react-router-dom'


import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import CreateCourse from '../CreateCourse/CreateCourse';
import EditCourse from '../EditCourse/EditCourse';
import CreateUser from '../CreateUser/CreateUser';
import Course from '../Course/Course';
import Users from '../Users/Users';



import NoPage from '../NoPage/NoPage';








class Container extends Component {
  render() {
    return (
          <div className="col-md-10">
          <Switch>

            <Route exact path='/' component={Home}/>
            <Route path='/all-courses' component={Courses}/>
            <Route path='/all-users' component={Users}/>
            <Route path='/create-course' key="create-course" component={CreateCourse}/>
            <Route path='/course/:courseId'  component={Course}/>
            <Route path='/edit/:courseId' key="edit-course" component={EditCourse}/>
            <Route path='/create-user' key="create-user" component={CreateUser}/>

            <Route component={NoPage}/>


          </Switch>

          </div>

      )




  }
}

export default Container;
