import React, { PropTypes } from 'react';
import NewProjectForm from './NewProjectForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';

class NewProjectManager extends React.Component {
  constructor(){
    super();
    this.state = { project: {} }
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let project = this.state.project;
    project[field] = event.target.value;
  }

  createNewProject(event){
    event.preventDefault();
    this.props.actions.createProject(this.state.project);
  }

  render() {
    return(
      <NewProjectForm project={this.state.project}
                      onChange={this.updateProjectFields}
                      createProject={this.createNewProject}
                      hideForm={this.props.toggleForm}/>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    project: state.project
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(projectActions, dispatch)
    //this component doesn't need all the actions, consider refactoring
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProjectManager);
// export default NewProjectManager;
