// Reference --> Exampels from redux

import {
  ADD_USER,
  GET_USERS,
  DELETE_USER
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
        users: [action.payload, ...state.users], // I have to change it
        user: action.payload
      };
    case GET_USERS:
      return {
        ...state, // 1,2,3
        users: action.payload // I have to change it
      };
    case DELETE_USER:
      return {
        ...state, // 1,2,3
        users: state.users.filter(el => {
          return el._id !== action.payload._id
        })
      };
    default:
      return state;
  }
}
