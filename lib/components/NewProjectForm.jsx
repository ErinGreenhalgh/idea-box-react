import React, { PropTypes } from 'react';

const NewProjectForm = ({ project, onChange, createProject, hideForm }) => {
  return (
    <form className='new-project' onSubmit={ createProject, hideForm }>
      <input type="text"
             name="name"
             placeholder='Project Name'
             value={ project.name }
             onChange={ onChange }/>
      <input type="text"
             name="description"
             placeholder='Project Description'
             value={ project.description }
             onChange={ onChange }/>
      <input type="submit"
             value="Add"/>
    </form>
  )
}

export default NewProjectForm;
