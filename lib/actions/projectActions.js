import * as types from './actionTypes';
import * as projectsDatabase from '../database/accessProjects';

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function loadProjects() {
  let projects = {1: {name: "project 1", description: "so great"}, 2: {name: "project 2 ", description: "even better"}}
  return function(dispatch) {
    return dispatch(loadProjectsSuccess(projects));
  }
}
