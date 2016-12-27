// import React from 'react';
// import ReactDOM from 'react-dom'
// import AllProjects from './AllProjects';
// import NewProject from './NewProject';
// import 'firebase/app'
// import 'firebase/database'
// import firebase from 'firebase';
// import ProjectDetail from './ProjectDetail'
//
// class Body extends React.Component {
//   constructor() {
//     super()
//     let app = firebase.initializeApp({ databaseURL: "https://project-manager-18532.firebaseio.com"});
//     let db = firebase.database();
//     this.ref = db.ref("projects")
//     this.state = {projects: {},
//                   formShowing: false,
//                   name: "",
//                   description: "",
//                   activeProject: null}
//     this.showForm = this.showForm.bind(this);
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleDescChange = this.handleDescChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.selectActive = this.selectActive.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.deactivateProject = this.deactivateProject.bind(this);
//     this.updateProject = this.updateProject.bind(this);
//   }
//
//   componentDidMount() {
//     this.ref.on("value", (dataSnapshot) => {
//       this.setState({projects: dataSnapshot.val()})
//     })
//   }
//
//   showForm () {
//     this.setState({ formShowing: true })
//   }
//
//   handleNameChange(event) {
//     this.setState({ name: event.target.value })
//   }
//
//   handleDescChange(event) {
//     this.setState({ description: event.target.value })
//   }
//
//   handleSubmit(event) {
//     let ref = firebase.database().ref('projects/');
//     let newProjectRef = ref.push();
//     newProjectRef.set({
//       name: this.state.name,
//       description: this.state.description
//     })
//     event.preventDefault();
//     this.setState({name: ""})
//     this.setState({description: ""})
//   }
//
//   selectActive(event) {
//     let projectId = event.target.id
//     let ref = firebase.database().ref("projects/")
//     let projects = {}
//     ref.on("value", (snapshot) => {
//       Object.assign(projects, snapshot.val())
//     })
//     for ( var key in projects) {
//       if (projects.hasOwnProperty(key)) {
//         if (key !== projectId) {
//           firebase.database().ref('projects/' + key).update({ active: false })
//         } else if (key === projectId) {
//           firebase.database().ref('projects/' + projectId).update({ active: true })
//         }
//       }
//     }
//     let project = {id: projectId}
//     let projRef = firebase.database().ref("projects/" + projectId)
//     projRef.on("value", (snapshot) => {
//       Object.assign(project, snapshot.val())
//     })
//     this.setState({activeProject: project})
//   }
//
//   handleDelete(event) {
//     let projectId = event.target.id
//     let ref = firebase.database().ref("projects/" + projectId)
//     ref.remove()
//     this.deactivateProject()
//   }
//
//   deactivateProject() {
//     this.setState({activeProject: null})
//   }
//
//   updateProject(event) {
//     let element = event.target.id
//     let data = {name: this.state.activeProject.name,
//                 description: this.state.activeProject.description}
//     if (element === 'project-name') {
//       Object.assign(data, {name: event.target.innerText})
//     }
//     if (element === 'project-description') {
//       Object.assign(data, {description: event.target.innerText})
//     }
//     let projectId = this.state.activeProject.id
//     let ref = firebase.database().ref("projects/" + projectId)
//     ref.update(data)
//   }
//
//   render() {
//     let newProject = <NewProject formShowing={this.state.formShowing}
//                 showForm={this.showForm.bind(this)}
//                 handleNameChange={this.handleNameChange.bind(this)}
//                 handleDescChange={this.handleDescChange.bind(this)}
//                 handleSubmit={this.handleSubmit.bind(this)}
//                 name={this.state.name}
//                 description={this.state.description}/>
//     let allProjects = <AllProjects projects={this.state.projects}
//                    selectActive={this.selectActive.bind(this)}
//                    deactivateProject={this.deactivateProject.bind(this)}/>
//     let projectDetail = <ProjectDetail project={this.state.activeProject}
//                                 handleDelete={this.handleDelete.bind(this)}
//                                 deactivateProject={this.deactivateProject.bind(this)}
//                                 updateProject={this.updateProject.bind(this)}/>
//
//     if (this.state.activeProject) {
//       return (
//         <div>
//           {newProject}
//           {allProjects}
//           {projectDetail}
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           {newProject}
//           {allProjects}
//         </div>
//       )
//     }
//   }
// }

// ReactDOM.render(<Body />, document.getElementById('layout'))
