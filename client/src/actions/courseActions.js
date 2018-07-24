// REF. Examples

import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
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


// Delete Course --> look for reference
export const deleteCourse = courseId => dispatch => {
  axios.delete(`/api/delete/${courseId}`)
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



// Upload File
export const uploadFile = file => dispatch => {
  axios.post(`/api/upload`,file)
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
  axios.delete(`/api/deleteFile/${courseId}/${fileId}`)
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
export const uploadVideo = (url, courseId, title, youtubeId) => dispatch => {
  axios.post('/api/uploadVideo', {url, courseId, title, youtubeId})
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
  axios.delete(`/api/deleteVideo/${courseId}/${videoId}`)
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
