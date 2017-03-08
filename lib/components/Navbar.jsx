import React from 'react';
import AddProjectButton from './AddProjectButton';

const Navbar = ({ clickAdd }) => {
  return(
    <div>
      <section id='form-detail'></section>
      <AddProjectButton handleClick={clickAdd}/>
    </div>
  )
}

export default Navbar;
