import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from "../../lib/actions/projectActions";
import * as types from "../../lib/actions/actionTypes";
import nock from 'nock';
import expect from 'expect';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('async project actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates LOAD_PROJECT_SUCCESS when all projects are successfully loaded', () => {
    let projects = {
      1: {name: "first project",  description: "it's great", phase: "0", due_date: "12-13-17"},
      2: {name: "second project", description: "also great", phase: "0", due_date: "12-15-17"},
      3: {name: "third project",  description: "greatest",   phase: "0", due_date: "12-17-17"}
    }

    nock('https://project-manager-18532.firebaseio.com/')
      .get('/projects')
      .reply(200, { body: { projects: projects }
    })


    const expectedActions = [
      { type: types.LOAD_PROJECTS_SUCCESS, body: { projects: projects} }
    ]

    const store = mockStore({ projects: {} });

    let storeThing = store.dispatch(actions.loadProjects())
    //here it's making an actual api call,stub is not working
    return storeThing
      .then(() => {
        let  testActions = store.getActions();
        console.log("test actions:", testActions);
        expect(testActions[0]).toEqual(expectedActions);
        console.log("promise delivered!")
      })
  })
})
