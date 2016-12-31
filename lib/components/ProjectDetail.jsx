import React from 'react';

const ProjectDetail = ({ project, handleClick, handleButtonClick, handleDelete, button }) => {
  let buttonId = "button-" + project.id
  return(
    <section className="project-detail overlay">
      <article className='detail-content'>
        <h1 className='close-detail' id={project.id} onClick={handleClick}> X </h1>
        <form>
          <table id='detail-table'>
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <input type='text'
                         name="name"
                         value={project.name}></input>
                </td>
              </tr>
              <tr>
                <th>Description</th>
                  <td>
                    <input type='text'
                           name="description"
                           value={project.description}></input>
                  </td>
              </tr>
              <tr>
                <th>Phase</th>
                  <td>
                    <input type='text'
                           name="phase"
                           value={project.phase}></input>
                  </td>
              </tr>
              <tr>
                <th>Due Date</th>
                  <td>
                    <input type='text'
                           name="due_date"
                           value={project.due_date}></input>
                  </td>
              </tr>
            </tbody>
          </table>
          <input id={buttonId}
                 type={button().type}
                 value={button().value}
                 onClick={handleDelete}></input>
        </form>
      </article>
    </section>
  )
}

export default ProjectDetail;
