/**
 * userReducer module
 * Ref: Redux Examples taken from  https://bit.ly/2BIGB2T
 * @module userReducer
 */

import {
  ADD_USER,
  GET_USERS,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/typesActions';

const firstState = {
  users: [],
  user: {},
  authUser: {}
}

export default function(state = firstState, action) {
  switch (action.type) {

    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        user: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(el => {
          return el._id !== action.payload._id
        })
      };
    case LOGIN_USER:
      return {
        ...state,
        authUser: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        authUser: {}
      };
    default:
      return state;
  }
}
