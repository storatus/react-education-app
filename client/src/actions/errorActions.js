import {
  REMOVE_ERRORS
} from './typesActions';

export const removeError = () => dispatch => {
  dispatch({
    type: REMOVE_ERRORS
  })
};
