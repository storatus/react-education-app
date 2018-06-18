

import React, { Component } from 'react';
import { Route,Switch,  } from 'react-router-dom'

import Courses from '../Courses/Courses';
import CreateCourse from '../CreateCourse/CreateCourse';
import MyCourses from '../MyCourses/MyCourses';



import Home from '../Home/Home';






class Container extends Component {
  render() {
    return (
          <div className="col-md-10">

          <Switch>

            <Route exact path='/' component={Home}/>
            <Route path='/all-courses' component={Courses}/>
            <Route path='/create-course' component={CreateCourse}/>
            <Route path='/my-courses' component={MyCourses}/>

          </Switch>

          </div>

      )




  }
}

export default Container;
