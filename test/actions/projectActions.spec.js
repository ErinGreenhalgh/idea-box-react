import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from "../../actions/projectActions";
import * as types from "../../actions/actionTypes";
import nock from 'nock';
import expect from 'expect';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('async project actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('created LOAD_PROJECT_SUCCESS when all projects are successfully loaded', () => {
    let projects = {
      {1: name: "first project",  description: "it's great", phase: "0", due_date: "12-13-17"},
      {2: name: "second project", description: "also great", phase: "0", due_date: "12-15-17"},
      {3: name: "third project",  description: "greatest",   phase: "0", due_date: "12-17-17"}
    }

    //maybe I want a mock API and to test actual firebase API calls elsewhere
    nock('http://example.com/')
      .get('/projects')
      .reply(200, { body: { projects: projects }
    })

    const expectedActions = [
      { types: types.LOAD_PROJECTS },
      { types: types.LOAD_PROJECTS_SUCCESS, body: { projects: projects} }
    ]

    const store = mockStore({ projects: {} });

    return store.dispatch(actions.loadProjects())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })
})
