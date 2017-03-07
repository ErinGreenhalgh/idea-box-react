import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import { getProject } from '../database/accessProjects';
import ProjectDetail from './ProjectDetail';
import NewProjectManager from './NewProjectManager';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeProject: {},
      formShowing: false
    }
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  selectActive(event) {
    let id = event.target.id
    this.props.actions.getProject(id);
  }

  deactivateProject(){
    this.props.actions.clearProject();
  }

  deleteProject(event){
    this.props.actions.deleteProject(event.target.id);
    this.deactivateProject();
  }

  showForm() {
    this.setState({formShowing: true});
  }

  hideForm() {
    this.setState({formShowing: false});
  }

  render() {
    //user has clicked on a project in the table to see the detail view
    if (this.props.activeProject && !this.state.formShowing) {
      return(
        <div className='project-area'>
          <Navbar clickAdd = {this.showForm}/>
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
         <ProjectDetail project={this.props.activeProject}
           handleClick={this.deactivateProject}
           handleDelete={this.deleteProject}
           handleChange={this.updateProjectState}
           showForm = {this.showForm}/>
        </div>
      )
    //user has clicked the Add Project Button in order to see the create form
    } else if (!this.props.activeProject && this.state.formShowing) {
      return (
      <div className='project-area'>
        <NewProjectManager hideForm = {this.hideForm} />
        <ProjectsTable projects={this.props.projects}
          selectActive={this.selectActive}/>
      </div>)
    //case when page loads: user has not clicked anything
    } else if (!this.props.activeProject && !this.state.formShowing){
      return (
        <div className='project-area'>
          <Navbar clickAdd = {this.showForm}/>
          <ProjectsTable projects={this.props.projects}
            selectActive={this.selectActive}/>
        </div>
      )
    //the user has clicked to update thier project from the project detail view
    } else if (this.props.activeProject && this.state.formShowing){
      return (
        <div className='project-area'>
            <NewProjectManager hideForm = {this.hideForm} />
      </div>)
    }else {
      console.log("There is a problem!!!!")
    }
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
   return {
    projects: state.projects,
    activeProject: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
