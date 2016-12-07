import React from 'react';
import 'firebase/app'
import 'firebase/database'
import firebase from 'firebase';

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

  render() {
    let projects = this.state.projects.map((project) => {
      return (
        <tr key={project.name}>
          <td>{project.name}</td>
          <td>{project.description}</td>
        </tr>
      )
    })

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
