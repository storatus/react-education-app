/**
 * courseActions module
 * Ref: Redux Examples taken from  https://bit.ly/2BIGB2T
 * @module courseActions
 */

/* Import all reducers*/
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


/** Action function to add course  */
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


/** Action function to get courses  */
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


/** Action function to delete course  */
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



/** Action function to get course  */
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


/** Action function to update course  */
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


/** Action function to download file  */
export const downloadFile = (path, fileName, fileId, courseId) => dispatch => {
    // Ref:
    axios({
      method: 'GET',
      url:`/api/course/file/${path}/${courseId}/${fileId}`,
      responseType: 'blob'})
    .then(res => {

      /* Ref: https://goo.gl/SGdqBm */
      let aTag = document.createElement('a');
      let url = window.URL.createObjectURL(new Blob([res.data]));
      aTag.href = url;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
    })
    .catch(err => console.log(err))
};


/** Action function to upload file  */
export const uploadFile = file => dispatch => {
  axios.post(`/api/course/file`,file)
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


/** Action function to delete file  */
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


/** Action function to upload video  */
export const uploadVideo = (url, courseId, title, youtubeId, thumbnail) => dispatch => {
  axios.post('/api/course/video', {url, courseId, title, youtubeId, thumbnail})
  .then(res =>
    dispatch({
      type: GET_COURSE,
      payload: res.data
    })
  ).catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
  );
};

/** Action function to watch video  */
export const watchVideo = (courseId,videoId, youtubeId) => dispatch => {
  axios.get(`/api/course/video/${courseId}/${videoId}`)
  .then(res => {
    window.location.href = `https://www.youtube.com/watch?v=${youtubeId}`
    dispatch({
      type: GET_COURSE,
      payload: res.data
    })
  }).catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
  );
};

/** Action function to delete video  */
export const deleteVideo = (courseId,videoId) => dispatch => {
  axios.delete(`/api/course/video/${courseId}/${videoId}`)
  .then(res =>
    dispatch({
      type: GET_COURSE,
      payload: res.data
    })
  ).catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
  );
};


/** Action function to enroll in course  */
export const enrollCourse = userData => dispatch => {
  axios.post('/api/course/enrollCourse', userData)
    .then(res =>
      dispatch({
          type: GET_COURSE,
          payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};

/** Action function to clean course  */
export const cleanCourse = () => dispatch => {
      dispatch({type: CLEAN_COURSE})
};


/** Action function to leave course  */
export const leaveCourse = (courseId,enrollId) => dispatch => {
  axios.delete(`/api/course/leaveCourse/${courseId}/${enrollId}`)
    .then(res =>
      dispatch({
          type: GET_COURSE,
          payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};
