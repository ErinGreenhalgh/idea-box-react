import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer
})

export default rootReducer;
