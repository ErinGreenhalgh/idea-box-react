import * as types from '../actions/actionTypes';

export function projectsReducer (state = {}, action) {
  switch(action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
