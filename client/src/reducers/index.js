import { combineReducers } from 'redux';
import courseReducer from './courseReducer';


const reducers =  combineReducers({
  course: courseReducer
});

export default reducers
