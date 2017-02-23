import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import NewProjectForm from './NewProjectForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import AddProjectButton from './AddProjectButton';

class NewProjectManager extends React.Component {
  constructor(){
    super();
    this.state = {
      project: {},
      addProjectFormShowing: false
    }
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let proj = this.state.project;
    proj[field] = event.target.value;
  }

  createNewProject(event){
    event.preventDefault();
    this.props.actions.createProject(this.state.project);
  }

  showForm() {
    ReactDOM.render(<NewProjectForm project={this.state.project}
                                    onChange={this.updateProjectFields}
                                    handleSubmit={this.handleSubmit}
                                    unmount={this.hideForm}/>,
                                  document.getElementById('form-detail'))
  }

  hideForm() {
    this.setState({ project: {} })
    ReactDOM.unmountComponentAtNode(document.getElementById('form-detail'));
  }

  handleSubmit(event){
    this.createNewProject(event)
    this.hideForm()
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

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectManager);
