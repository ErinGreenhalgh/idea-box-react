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
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{project.description}</td>
            </tr>
            <tr>
              <th>Phase</th>
              <td>{project.phase}</td>
            </tr>
            <tr>
              <th>Due Date</th>
              <td>{project.due_date}</td>
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
