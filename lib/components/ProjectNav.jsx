import React, { PropTypes } from 'react';
import AddProjectButton from './AddProjectButton'
import NewProjectManager from './NewProjectManager';

class ProjectNav extends React.Component {
  constructor(){
    super();
    this.state = {
      addProjectFormShowing: false
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    if (this.state.addProjectFormShowing == true) {
      this.setState({ addProjectFormShowing: false })
    } else {
      this.setState({ addProjectFormShowing: true })
    }
  }

  render(){
    if (this.state.addProjectFormShowing == false) {
      return(
        <AddProjectButton handleClick={this.toggleForm}/>
      )
    } else {
      return (
        <NewProjectManager toggleForm={this.toggleForm}/>
      )
    }
  }
}

export default ProjectNav;
