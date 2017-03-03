import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import NewProjectForm from './NewProjectForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';

class NewProjectManager extends React.Component {
  constructor(){
    super();
    this.state = {
      project: {}
    }
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let proj = Object.assign( {}, this.props.project, this.state.project)
    proj[field] = event.target.value;
    this.setState({ project: proj })
  }

  createNewProject(event){
    event.preventDefault();
    this.props.actions.createProject(this.state.project);
  }

  hideForm() {
    this.setState({ project: {} })
    ReactDOM.unmountComponentAtNode(document.getElementById('form-detail'));
  }

  handleSubmit(event){
    this.createNewProject(event)
    // this.hideForm()
    //how should we handle hiding the form after submit?
    //after submit, component will unmount?
  }

  render() {
    return(
      <NewProjectForm project={this.state.project}
                      onChange={this.updateProjectFields}
                      handleSubmit={this.handleSubmit} />
    )
  }
}


function mapStateToProps(state, ownProps) {
  if (state.project) {
    return { project: state.project}
  } else {
    return {project: {name: "", description: "", phase: "", due_date: ""}}
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(projectActions, dispatch)
    //this component doesn't need all the actions, consider refactoring
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectManager);
