import * as types from './actionTypes';
import * as projectsDatabase from '../database/accessProjects';

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function createProjectSuccess(projects){
  return { type: types.CREATE_PROJECT_SUCCESS, projects };
}

export function getProjectSuccess(project) {
  return { type: types.GET_PROJECT_SUCCESS, project };
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

export function getProject(id){
  return function(dispatch) {
    projectsDatabase.getProject(id).then(project => {
      dispatch(getProjectSuccess(project));
    }).catch(error => {
      console.log(error)
    });
  }
}
