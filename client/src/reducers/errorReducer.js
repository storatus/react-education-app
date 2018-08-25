// Ref: Redux Examples taken from  https://bit.ly/2BIGB2T

import {
  ERRORS,
  REMOVE_ERRORS
} from '../actions/typesActions';

const firstState = {
  message: {}
}

export default function(state = firstState, action) {
  switch (action.type) {
    case ERRORS:
      return {
        message: action.payload
      };

    case REMOVE_ERRORS:
      return {
        message: {}
      };

    default:
      return state;
  }
}
