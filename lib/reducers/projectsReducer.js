import * as types from '../actions/actionTypes';

export default function projectsReducer (state = {}, action) {
  switch(action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects;
    case types.CREATE_PROJECT_SUCCESS:
      return action.projects;
    case types.DELETE_PROJECT_SUCCESS:
      return action.projects;
    case types.UPDATE_PROJECT_SUCCESS:
      return action.projects;
    default:
      return state;
  }
}
