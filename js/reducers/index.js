import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import app from './app';
import project from './project';

export default combineReducers({
  app: app,
  project: project,
  routing: routeReducer
});
