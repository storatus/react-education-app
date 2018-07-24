// REF. Examples

import {
  ADD_USER,
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
