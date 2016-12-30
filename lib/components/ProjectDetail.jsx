import React from 'react';
import DetailRow from './DetailRow';

const ProjectDetail = ({ project, deactivateProject, handleDelete }) => {
  let detailRows = []
  for (var key in project) {
    if (project.hasOwnProperty(key) && key != "id"){
      let html = <tr key={key}>
        <th>{key}</th>
        <td>{project[key]}</td>
      </tr>
      detailRows.push(html)
    }
  }

  return(
    <section className="project-detail overlay">
      <article className='detail-content'>
        <h1 id='close-detail' onClick={deactivateProject}> X </h1>
        <table id='detail-table'>
          <tbody>
            {detailRows}
          </tbody>
        </table>
        <button id={project.id}
                onClick={handleDelete}>Delete</button>
      </article>
    </section>
  )
}

export default ProjectDetail;
