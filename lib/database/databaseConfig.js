import 'firebase/app';
import 'firebase/database';
import firebase from 'firebase';

export const application = firebase.initializeApp({databaseURL: "https://project-manager-18532.firebaseio.com"});
export const db = firebase.database();
export const projectsRef = db.ref("projects");
