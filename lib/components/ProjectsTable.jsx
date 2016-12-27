import React, { PropTypes } from 'react';

const ProjectsTable = ({ projects }) => {
  let projectObject = projects
  let projectRows = [];
  for (var key in projectObject) {
    if(projectObject.hasOwnProperty(key)) {
      let html =
      <tr key={key} >
        <td id={key}>{projectObject[key].name}</td>
        <td id={key}>{projectObject[key].description}</td>
      </tr>
      projectRows.push(html)
    }
  }
  //refactor the row into its own component 

  return (
    <div>
      <section className="all-projects">
        <table>
          <tbody>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
            {projectRows}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ProjectsTable;
