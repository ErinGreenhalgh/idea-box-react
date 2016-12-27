import { projectsRef } from './databaseConfig';

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
}
