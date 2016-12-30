import { db, projectsRef } from './databaseConfig';

export function allProjects(){
  return projectsRef.once('value').then(snapshot => {
    return snapshot.val();
  })
}

export function createProject(project){
  let newProjectRef = projectsRef.push();
  newProjectRef.set({
    name: project.name,
    description: project.description
  })
  return allProjects();
}

export function getProject(projectId) {
  return db.ref("projects/" + projectId).once("value").then(snapshot => {
    return Object.assign({}, snapshot.val(), {id: projectId});
  })
}

export function deleteProject(projectId) {
  db.ref("projects/" + projectId).remove();
  return allProjects();
}
