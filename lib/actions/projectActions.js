import * as types from './actionTypes';
import * as projectsDatabase from '../database/accessProjects';

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function createProjectSuccess(projects){
  return { type: types.CREATE_PROJECT_SUCCESS, projects };
}

export function loadProjects() {
  return function(dispatch) {
    projectsDatabase.allProjects().then(projects => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  }
}

export function createProject(project){
  return function(dispatch) {
    projectsDatabase.createProject(project).then(projects => {
      dispatch(createProjectSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  }
}
