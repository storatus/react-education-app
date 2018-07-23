// REF. Examples

import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE,
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

// Get Courses
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

// Get Course
export const getCourse = courseId => dispatch => {
  axios.get(`/api/course/${courseId}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
    );
};


// Update Course
export const updateCourse = courseData => dispatch => {
  axios.post(`/api/update`, courseData)
    .then(res =>
      dispatch({
        type: UPDATE_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_COURSE,
        payload: null
      })
    );
};
