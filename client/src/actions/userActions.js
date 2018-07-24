// REF. Examples

import {
  ADD_USER,
  GET_USERS,
  DELETE_USER,
  ERRORS
} from './typesActions';
import axios from 'axios';

// Add Course
export const addUser = userData => dispatch => {
  axios.post('/api/user/create', userData)
    .then(res =>
      dispatch({
        type: ADD_USER,
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



// Get Users
export const getUsers = () => dispatch => {
  axios.get('/api/user/')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null
      })
    );
};



// Delete User
export const deleteUser = userId => dispatch => {
  axios.delete(`/api/user/delete/${userId}`)
    .then(res =>
      dispatch({
        type: DELETE_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null
      })
    );
};
