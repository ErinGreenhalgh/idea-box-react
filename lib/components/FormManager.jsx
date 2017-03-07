import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ProjectForm from './ProjectForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';

class FormManager extends React.Component {
  constructor(props){
    super();
    this.state = {
      project: props.project
    }
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProject = this.updateProject.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let proj = Object.assign( {}, this.props.project, this.state.project)
    proj[field] = event.target.value;
    this.setState({ project: proj })
  }

  updateProject(event) {
    event.preventDefault;
    this.props.actions.updateProject(this.props.project.id, this.state.project)
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
    if (this.props.project.id) {
      this.updateProject(event);
    } else {
      this.createNewProject(event);
    }
    this.props.hideForm();
  }

  render() {
    return(
      <ProjectForm project={this.state.project}
                      onChange={this.updateProjectFields}
                      handleSubmit={this.handleSubmit}
                      unmount={this.props.hideForm} />
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
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
