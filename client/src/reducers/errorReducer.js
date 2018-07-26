// Reference --> Exampels from redux

import {
  ERRORS,
  REMOVE_ERRORS
} from '../actions/typesActions';

const initialState = {
  message: {}
}

export default function(state = initialState, action) {
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
