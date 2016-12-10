import React from 'react';
import ReactDOM from 'react-dom'
import AllProjects from './AllProjects';
import NewProject from './NewProject';
import 'firebase/app'
import 'firebase/database'
import firebase from 'firebase';

class Body extends React.Component {
  constructor() {
    super()
    let app = firebase.initializeApp({ databaseURL: "https://project-manager-18532.firebaseio.com"});
    let db = firebase.database();
    this.ref = db.ref("projects")
    let projects = this.ref.on("value", (dataSnapshot) => {
      this.setState({projects: dataSnapshot.val()})
    })
    this.state = {projects: projects, formShowing: false, name: "", description: ""}

  }

  // componentDidMount() {
  //   this.ref.on("value", (dataSnapshot) => {
  //     this.setState({projects: dataSnapshot.val()})
  //   })
  // }

  render() {
    return (
      <div>
        <NewProject />
        <AllProjects projects={this.state.projects}/>
      </div>
    )
  }
}

ReactDOM.render(<Body />, document.getElementById('layout'))
