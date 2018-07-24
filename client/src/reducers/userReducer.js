// Reference --> Exampels from redux

import {
  ADD_USER
} from '../actions/typesActions';

const initialState = {
  users: [],
  user: {},
  auth: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state, // 1,2,3
        users: [action.payload, ...state.users] // I have to change it
      };
    default:
      return state;
  }
}
