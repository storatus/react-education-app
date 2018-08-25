import React, { Component } from 'react';
import { Route,Switch,  } from 'react-router-dom'
import './Container.css';


import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import MyCourses from '../MyCourses/MyCourses';
import CreateCourse from '../CreateCourse/CreateCourse';
import EditCourse from '../EditCourse/EditCourse';
import CreateUser from '../CreateUser/CreateUser';
import Course from '../Course/Course';
import Users from '../Users/Users';
import Login from '../Login/Login';
import NoPage from '../NoPage/NoPage';
import Auth from '../Auth/Auth'

/**
 * Container React Class - This is where router is implemented to switch between pages
 * @class Container
 */
class Container extends Component {
  render() {
    return (
          <main role="main" className="col-md-10 main-container">
            <Switch>
              <Route exact path='/'  component={Auth(Home)}/>
              <Route path='/all-courses' component={Auth(Courses)}/>
              <Route path='/my-courses' component={Auth(MyCourses)}/>
              <Route path='/all-users' component={Auth(Users,1)}/>
              <Route path='/create-course'  key="create-course" component={Auth(CreateCourse,1)}/>
              <Route path='/course/:courseId' component={Course}/>
              <Route path='/edit/:courseId'  key="edit-course" component={Auth(EditCourse,1)}/>
              <Route path='/create-user'  key="create-user" component={Auth(CreateUser,1)}/>
              <Route path='/login' key="login" component={Login}/>
              <Route component={Auth(NoPage)}/>
            </Switch>
          </main>
      )
  }
}

export default Container;
