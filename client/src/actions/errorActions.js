import {
  ERRORS,
  REMOVE_ERRORS
} from './typesActions';

// Remove error
export const removeError = () => dispatch => {
  dispatch({
    type: REMOVE_ERRORS
  })
};
