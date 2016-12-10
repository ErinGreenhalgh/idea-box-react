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
    this.state = {projects: projects,
                  formShowing: false,
                  name: "",
                  description: ""}
    this.showForm = this.showForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.ref.on("value", (dataSnapshot) => {
  //     this.setState({projects: dataSnapshot.val()})
  //   })
  // }

  showForm () {
    this.setState({ formShowing: true })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleDescChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    let ref = firebase.database().ref('projects/');
    let newProjectRef = ref.push();
    newProjectRef.set({
      name: this.state.name,
      description: this.state.description
    })
    event.preventDefault();
    this.setState({name: ""})
    this.setState({description: ""})
  }

  render() {
    return (
      <div>
        <NewProject formShowing={this.state.formShowing}
                    showForm={this.showForm.bind(this)}
                    handleNameChange={this.handleNameChange.bind(this)}
                    handleDescChange={this.handleDescChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    name={this.state.name}
                    description={this.state.description}/>
        <AllProjects projects={this.state.projects}/>
      </div>
    )
  }
}

ReactDOM.render(<Body />, document.getElementById('layout'))
