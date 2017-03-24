import expect from 'expect';
import * as database from '../../lib/database/accessProjects';
import proxyquire from 'proxyquire';
import { projectsRef } from '../../lib/database/databaseConfig';

describe ("accesses projects from the database", () => {
  it('can get all the projects', () => {

  let MockFirebase = require('firebase-mock').MockFirebase;
  console.log("MockFirebase:", MockFirebase)
  MockFirebase.override();
  let expectedProjects = database.allProjects();

  let projects = {
    1: {name: "first project",  description: "it's great", phase: "0", due_date: "12-13-17"},
    2: {name: "second project", description: "also great", phase: "0", due_date: "12-15-17"},
    3: {name: "third project",  description: "greatest",   phase: "0", due_date: "12-17-17"}
  }
  projectsRef.push({ projects });
  projectsRef.flush();

  expect(expectedProjects).toEqual(projects);




  })
})
