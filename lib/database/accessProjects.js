import 'firebase/app'
import 'firebase/database'
import firebase from 'firebase';

export function allProjects(){
  const application = firebase.initializeApp({databaseURL: "https://project-manager-18532.firebaseio.com"});
  const db = firebase.database();
  const projectsRef = db.ref("projects");
  return projectsRef.once('value').then(snapshot => {
    return snapshot.val();
  })
}
