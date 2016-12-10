import React from 'react';
import ProjectDetail from './ProjectDetail'
import firebase from 'firebase';

export default class AllProjects extends React.Component{
  constructor() {
    super()
    this.state = { activeProject: null }
    this.selectActive = this.selectActive.bind(this)
  }

  selectActive(event) {
    let projectId = event.target.id
    let ref = firebase.database().ref("projects/")
    let projects = {}
    ref.on("value", (snapshot) => {
      Object.assign(projects, snapshot.val())
    })
    for ( var key in projects) {
      if (projects.hasOwnProperty(key)) {
        if (key !== projectId) {
          firebase.database().ref('projects/' + key).update({ active: false })
        } else if (key === projectId) {
          firebase.database().ref('projects/' + projectId).update({ active: true })
        }
      }
    }
    let project = {}
    let projRef = firebase.database().ref("projects/" + projectId)
    projRef.on("value", (snapshot) => {
      Object.assign(project, snapshot.val())
    })
    this.setState({activeProject: project})
  }

  render() {
    let projectObject = this.props.projects
    let projects = [];
    for (var key in projectObject) {
      if(projectObject.hasOwnProperty(key)) {
        let html =
        <tr key={key} onClick={this.selectActive}>
          <td id={key}>{projectObject[key].name}</td>
          <td id={key}>{projectObject[key].description}</td>
        </tr>
        projects.push(html)
      }
    }

    return (
      <div>
        <section className="all-projects">
          <table>
            <tbody>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
              </tr>
              {projects}
            </tbody>
          </table>
        </section>
        <section className='project-detail'>
          <ProjectDetail project={this.state.activeProject}/>
        </section>
      </div>
    )
  }
};
