import React from 'react';

const ProjectDetail = ({ project, unmount, handleSubmit, handleChange }) => {
  return(
    <section className="project-detail overlay">
      <article className='detail-content'>
        <h1 className='close-detail' id={ project.id } onClick={ unmount }> X </h1>
        <form onSubmit={ handleSubmit }>
          <table id='detail-table'>
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <input type='text'
                         name="name"
                         value={ project.name }
                         onChange={ handleChange }></input>
                </td>
              </tr>
              <tr>
                <th>Description</th>
                  <td>
                    <input type='text'
                           name="description"
                           value={ project.description }
                           onChange={ handleChange }></input>
                  </td>
              </tr>
              <tr>
                <th>Phase</th>
                  <td>
                    <input type='text'
                           name="phase"
                           value={ project.phase }
                           onChange={ handleChange }></input>
                  </td>
              </tr>
              <tr>
                <th>Due Date</th>
                  <td>
                    <input type='text'
                           name="due_date"
                           value={ project.due_date }
                           onChange={ handleChange }></input>
                  </td>
              </tr>
            </tbody>
          </table>
          <input type="submit"
                 value="Add Project"></input>
        </form>
      </article>
    </section>
  )
}

export default ProjectDetail;
