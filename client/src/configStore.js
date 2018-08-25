/**
 * configStore module
 * Ref: Redux Examples taken from  https://bit.ly/2BIGB2T
 * @module configStore
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];



const configStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);



export default configStore;
