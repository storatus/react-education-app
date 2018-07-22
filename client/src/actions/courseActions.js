// REF. Examples

import {
  ADD_COURSE,
  GET_COURSES,
  ERRORS
} from './typesActions';
import axios from 'axios';


// Add Course
export const addCourse = courseData => dispatch => {
  axios.post('/api/create', courseData)
    .then(res =>
      dispatch({
        type: ADD_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};


export const getCourses = () => dispatch => {
  axios.get('/api/courses')
    .then(response =>
      {dispatch({
          type: GET_COURSES,
          payload: response.data
        })
      }

    )
    .catch(err =>
       dispatch({
        type: GET_COURSES,
        payload: null
      })
    );



};
