import React from 'react';

const ProjectDetail = ({ project, handleClick, handleSubmit, handleChange, handleDelete, makeEditable, update }) => {
  let buttonId = "button-" + project.id
  return(
    <section className="project-detail overlay">
      <article className='detail-content'>
        <h1 className='close-detail' id={ project.id } onClick={ handleClick }> X </h1>
        <table id='detail-table'>
          <tbody>
            <tr className="name">
              <th>Name</th>
              <td onClick={ makeEditable }
                  onBlur={ update }>{ project.name }</td>
            </tr>
            <tr className="description">
              <th>Description</th>
              <td onClick={ makeEditable } onBlur={ update }>{ project.description }</td>
            </tr>
            <tr className="phase">
              <th>Phase</th>
              <td onClick={ makeEditable } onBlur={ update }>{ project.phase }</td>
            </tr>
            <tr className="due-date">
              <th>Due Date</th>
              <td onClick={ makeEditable } onBlur={ update }> { project.due_date }</td>
            </tr>
          </tbody>
        </table>
        <button id={project.id} onClick={handleDelete}>Delete</button>
      </article>
    </section>
  )
}

export default ProjectDetail;
