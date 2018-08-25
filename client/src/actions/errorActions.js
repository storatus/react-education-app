/**
 * errorActions module
 * @module errorActions
 */

/* Import all error reducers */
import {
  REMOVE_ERRORS
} from './typesActions';

/** Action function to remove Error that is in state */
export const removeError = () => dispatch => {
  dispatch({
    type: REMOVE_ERRORS
  })
};
