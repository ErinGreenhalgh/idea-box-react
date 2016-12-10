import React from 'react';
import 'firebase/app'
import 'firebase/database'
import firebase from 'firebase';
// import { mapObject } from '../helpers';

export default class AllProjects extends React.Component{
  constructor() {
    super();
    this.state = { projects: [] }
    let app = firebase.initializeApp({ databaseURL: "https://project-manager-18532.firebaseio.com"});
    let db = firebase.database();
    this.ref = db.ref("projects")
  }

  componentDidMount() {
    this.ref.once("value", (dataSnapshot) => {
      this.setState({projects: dataSnapshot.val()})
    })
  }
  //seems not to be showing a realtime snapshot of data?
  // or check if componentDidMount is the right place for this

  render() {
    let projectObject = this.state.projects
    let projects = [];
    for (var key in projectObject) {
      if(projectObject.hasOwnProperty(key)) {
        let html =
        <tr key={key}>
          <td>{projectObject[key].name}</td>
          <td>{projectObject[key].description}</td>
        </tr>
        projects.push(html)
      }
    }
    console.log("result:", projects)

    return (
      <div className="all-projects">
        <table>
          <tbody>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
            {projects}
          </tbody>
        </table>
      </div>
    )
  }
};
