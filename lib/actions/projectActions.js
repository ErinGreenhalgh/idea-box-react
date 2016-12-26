import * as types from '../actionTypes';

function loadProjectsSuccess (projects) {
  { type: types.LOAD_PROJECTS_SUCCESS, projects }
}
