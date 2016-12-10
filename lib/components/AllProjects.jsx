import React from 'react';

export default class AllProjects extends React.Component{

  render() {
    let projectObject = this.props.projects
    let projects = [];
    for (var key in projectObject) {
      if(projectObject.hasOwnProperty(key)) {
        let html =
        <tr key={key} onClick={this.showProject}>
          <td>{projectObject[key].name}</td>
          <td>{projectObject[key].description}</td>
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
          <ProjectDetail />
        </section>
      </div>
    )
  }
};
