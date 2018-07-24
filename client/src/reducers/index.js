import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';

const reducers =  combineReducers({
  course: courseReducer,
  user: userReducer
});

export default reducers
