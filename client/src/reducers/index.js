/**
 * index.js module for configuration
 * Ref: Redux Examples taken from  https://bit.ly/2BIGB2T
 * @module index.js reducer configuration
 */
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

const reducers =  combineReducers({
  course: courseReducer,
  user: userReducer,
  errors: errorReducer
});

export default reducers
