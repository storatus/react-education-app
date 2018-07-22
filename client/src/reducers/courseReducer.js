// Reference --> Exampels from redux

import {
  ADD_COURSE,
  GET_COURSES
} from '../actions/typesActions';



// What about loading ?
const initialState = {
  courses: [],
  course: {}
}


export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
    return {
        ...state, // 1,2,3
        courses: action.payload
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses]
      };
    default:
      return state;
  }
}


// export default courseReducer
