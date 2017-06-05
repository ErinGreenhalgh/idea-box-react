import { db, projectsRef } from './databaseConfig';

export function allProjects(){
  return projectsRef.once('value')
    .then(snapshot => {
    return snapshot.val();
    })
    .catch(error => {
      console.log(error);
    })
}

export function createProject(project){
  const newProjectRef = projectsRef.push();
  newProjectRef.set({
    name: project.name,
    description: project.description,
    phase: project.phase,
    due_date: project.due_date
  })
  //need to accound for them not filling in everything
  //iterate through and push each of the keys??
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

export function updateProject(projectId, updates) {
  db.ref("projects/" + projectId).update(updates);
}

export function updateOneAndReturnAll(projectId, updates) {
  updateProject(projectId, updates);
  return allProjects();
}
