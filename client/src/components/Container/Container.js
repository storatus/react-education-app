import React, { Component } from 'react';
import { Route,Switch,  } from 'react-router-dom'


import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import CreateCourse from '../CreateCourse/CreateCourse';
import EditCourse from '../EditCourse/EditCourse';
import CreateUser from '../CreateUser/CreateUser';
import Course from '../Course/Course';
import Users from '../Users/Users';
import Login from '../Login/Login';
import NoPage from '../NoPage/NoPage';
import Auth from '../Auth/Auth'




class Container extends Component {
  render() {
    return (
          <div className="col-md-10">
          <Switch>

            <Route exact path='/'  component={Auth(Home)}/>
            <Route path='/all-courses' component={Auth(Courses)}/>
            <Route path='/all-users' component={Auth(Users,1)}/>
            <Route path='/create-course'  key="create-course" component={Auth(CreateCourse,1)}/>
            <Route path='/course/:courseId' component={Course}/>
            <Route path='/edit/:courseId'  key="edit-course" component={Auth(EditCourse,1)}/>
            <Route path='/create-user'  key="create-user" component={Auth(CreateUser,1)}/>
            <Route path='/login' key="login" component={Login}/>


            <Route component={NoPage}/>


          </Switch>

          </div>

      )




  }
}

export default Container;
