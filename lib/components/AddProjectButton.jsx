import React, { PropTypes } from 'react'

const AddProjectButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}> + Add Project</button>
  )
}

export default AddProjectButton;
