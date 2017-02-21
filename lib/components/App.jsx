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
      activeProject: {}
    }
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.showForm = this.showForm.bind(this);
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
    if (this.state.activeProject.name) {
      //this above is jankey; another way to check if active project has attributes?
      ReactDOM.render(<NewProjectManager project={ this.state.activeProject } />, document.getElementById("form-detail"));
    } else {
      let project = { name: "", description: "", phase: "", due_date: ""};
      ReactDOM.render(<NewProjectManager project={ project } />, document.getElementById("form-detail"));
    }
  }

  render() {
    if (this.props.activeProject) {
      return(
        <div className='project-area'>
          <Navbar clickAdd = {this.showForm}/>
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
          <ProjectDetail project={this.props.activeProject}
                         handleClick={this.deactivateProject}
                         handleDelete={this.deleteProject}
                         handleChange={this.updateProjectState}/>
        </div>
      )
    } else {
      return(
        <div className='project-area'>
          <Navbar clickAdd = {this.showForm}/>
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
        </div>
      )
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
