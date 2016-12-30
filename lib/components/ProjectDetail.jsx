import React from 'react';

const ProjectDetail = ({ project, deactivateProject, handleDelete }) => {
  return(
    <section className="project-detail overlay">
      <article className='detail-content'>
        <h1 id='close-detail' onClick={deactivateProject}> X </h1>
        <table id='detail-table'>
          <tbody>
            <tr>
              <th>Name</th>
              <td id='project-name'>{project.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td id='project-description' >{project.description} </td>
            </tr>
          </tbody>
        </table>
        <button id={project.id}
                onClick={handleDelete}>Delete</button>
      </article>
    </section>
  )
}

export default ProjectDetail;
