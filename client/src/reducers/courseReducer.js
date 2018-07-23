// Reference --> Exampels from redux

import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE
} from '../actions/typesActions';



// What about loading ?
const initialState = {
  courses: [],
  course: {}
}

export default function(state = initialState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case GET_COURSES:
    return {
        ...state, // 1,2,3
        courses: action.payload
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses] // I have to change it
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload
      };
    case UPDATE_COURSE:
      return {
        ...state,
        course: action.payload
      };
    default:
      return state;
  }
}
