import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AddProjectButton from './AddProjectButton'
import NewProjectManager from './NewProjectManager';
import ProjectDetail from './ProjectDetail';

class ProjectNav extends React.Component {
  constructor(){
    super();
    this.state = {
      addProjectFormShowing: false,
      project: { name: "", description: "", due_date: "", phase: ""}
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  toggleForm() {
    if (this.state.addProjectFormShowing == true) {
      this.setState({ addProjectFormShowing: false })
    } else {
      this.setState({ addProjectFormShowing: true })
    }
  }

  showForm() {
    ReactDOM.render(<ProjectDetail project={this.state.project} handleClick={this.props.removeDetailView}/>,
                    document.getElementById('render-here'))
  }

  render() {
    return(
      <div>
        <section id="render-here"></section>
        <AddProjectButton handleClick={this.showForm}/>
      </div>
    )
  }
}

export default ProjectNav;
