import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddProjectButton from './AddProjectButton'
import NewProjectManager from './NewProjectManager';
import NewProjectForm from './NewProjectForm';
import * as projectActions from '../actions/projectActions';

class ProjectNav extends React.Component {
  constructor(){
    super();
    this.state = {
      addProjectFormShowing: false,
      project: {}
    }
    this.showForm = this.showForm.bind(this);
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let proj = this.state.project;
    proj[field] = event.target.value;
  }

  createNewProject(event){
    event.preventDefault();
    this.props.dispatch(projectActions.createProject(this.state.project));
    // this.props.actions.createProject(this.state.project);
    //why is bindActionCreators not working here / below?
  }

  showForm() {
    ReactDOM.render(<NewProjectForm project={this.state.project}
                                    handleChange={this.updateProjectFields}
                                    handleSubmit={this.createNewProject}
                                    unmount={this.hideForm}/>,
                                  document.getElementById('form-detail'))
  }

  hideForm() {
    this.setState({ project: {} })
    ReactDOM.unmountComponentAtNode(document.getElementById('form-detail'));
  }


  render() {
    return(
      <div>
        <section id="form-detail"></section>
        <AddProjectButton handleClick={this.showForm}/>
      </div>
    )
  }
}

//this is unnecessary, I just don't know how to access dispatch without passing
//mapStateToProps to connect...
function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps)(ProjectNav);
