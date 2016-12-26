import * as types from './actionTypes';

function loadProjectsSuccess () {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects: {name: "Project 1", description: "so great"}};
}
