import React, { Component } from 'react';
import { Route,Switch,  } from 'react-router-dom'


import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import CreateCourse from '../CreateCourse/CreateCourse';
import MyCourses from '../MyCourses/MyCourses';
import Course from '../Course/Course';
import NoPage from '../NoPage/NoPage';








class Container extends Component {
  render() {
    return (
          <div className="col-md-10">
          <Switch>

            <Route exact path='/' component={Home}/>
            <Route path='/all-courses' component={Courses}/>
            <Route path='/create-course' key="create-course" component={CreateCourse}/>
            <Route path='/my-courses' component={MyCourses}/>
            <Route path='/course/:courseId'  component={Course}/>
            <Route path='/edit/:courseId' key="edit-course" component={CreateCourse}/>
            <Route component={NoPage}/>


          </Switch>

          </div>

      )




  }
}

export default Container;
