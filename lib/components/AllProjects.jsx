import React from 'react';
import ProjectDetail from './ProjectDetail'
import firebase from 'firebase';

export default class AllProjects extends React.Component{
  render() {
    let projectObject = this.props.projects
    let projects = [];
    for (var key in projectObject) {
      if(projectObject.hasOwnProperty(key)) {
        let html =
        <tr key={key} onClick={this.props.selectActive}>
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
          <ProjectDetail project={this.props.activeProject}
                         handleDelete={this.props.handleDelete.bind(this)}/>
        </section>
      </div>
    )
  }
};
