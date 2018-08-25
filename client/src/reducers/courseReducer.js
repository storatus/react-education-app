/**
 * courseReducer module
 * Ref: Redux Examples taken from  https://bit.ly/2BIGB2T
 * @module courseReducer
 */



import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  CLEAN_COURSE,
} from '../actions/typesActions';


const firstState = {
  courses: [],
  course: {}
}


/*CHANGE STATE ACCORDINGLY*/
export default function(state = firstState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses]
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload
      };

    case CLEAN_COURSE:
      return {
        ...state,
        course: {}
      };

    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(el => {
          return el._id !== action.payload._id
        })
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
