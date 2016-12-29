import * as types from '../actions/actionTypes';

export default function projectReducer(state=null, action){
  switch(action.type){
    case types.GET_PROJECT_SUCCESS:
      return action.project
    case types.CLEAR_PROJECT:
      return action.project;
    default:
      return state;
  }
}
