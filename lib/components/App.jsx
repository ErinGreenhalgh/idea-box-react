import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import ProjectNav from './ProjectNav';
import { getProject } from '../database/accessProjects';
import ProjectDetail from './ProjectDetail';
import NewProjectManager from './NewProjectManager';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeProject: {}
    }
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
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

  render() {
    if (this.props.activeProject) {
      return(
        <div className='project-area'>
          <NewProjectManager />
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
          <NewProjectManager />
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
