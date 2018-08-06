// REF. Examples

import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  CLEAN_COURSE,
  ERRORS
} from './typesActions';
import axios from 'axios';

// Add Course
export const addCourse = courseData => dispatch => {
  axios.post('/api/course/', courseData)
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
  axios.get('/api/course')
    .then(response =>
      dispatch({
          type: GET_COURSES,
          payload: response.data
        }))
    .catch(err =>
       dispatch({
        type: GET_COURSES,
        payload: null
      })
    );
};

// Delete Course --> look for reference
export const deleteCourse = courseId => dispatch => {
  axios.delete(`/api/course/${courseId}`)
    .then(res =>{
        dispatch({
        type: DELETE_COURSE,
        payload: res.data
      })}
    )
    .catch(err =>
      dispatch({
        type: DELETE_COURSE,
        payload: null
      })
    );
};



// Get Course
export const getCourse = courseId => dispatch => {
  dispatch({
    type: CLEAN_COURSE
  })
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
  axios.put(`/api/course/${courseData._id}`, courseData)
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




// Upload File
export const uploadFile = file => dispatch => {
  axios.post(`/api/course/file`,file)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data // This I have to change, this is why it is not updating
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
    );
};



// Delete File
export const deleteFile = (courseId,fileId) => dispatch => {
  axios.delete(`/api/course/file/${courseId}/${fileId}`)
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


// Upload Video
export const uploadVideo = (url, courseId, title, youtubeId, thumbnail) => dispatch => {
  axios.post('/api/course/video', {url, courseId, title, youtubeId, thumbnail})
  .then(res =>
    dispatch({
      type: GET_COURSE,
      payload: res.data // This I have to change, this is why it is not updating
    })
  ).catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
  );
};



// Upload Video
export const deleteVideo = (courseId,videoId) => dispatch => {
  axios.delete(`/api/course/video/${courseId}/${videoId}`)
  .then(res =>
    dispatch({
      type: GET_COURSE,
      payload: res.data // This I have to change, this is why it is not updating
    })
  ).catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
  );
};


// Enroll Course
export const enrollCourse = userData => dispatch => {
  axios.post('/api/course/enrollCourse', userData)
    .then(res =>
      dispatch({
          type: GET_COURSE,
          payload: res.data // This I have to change, this is why it is not updating
    }))
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};


export const cleanCourse = () => dispatch => {
      dispatch({type: CLEAN_COURSE})
};


// leave course
export const leaveCourse = (courseId,enrollId) => dispatch => {
  axios.delete(`/api/course/leaveCourse/${courseId}/${enrollId}`)
    .then(res =>
      dispatch({
          type: GET_COURSE,
          payload: res.data // This I have to change, this is why it is not updating
    }))
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};
