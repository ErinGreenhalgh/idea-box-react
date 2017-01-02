import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import ProjectNav from './ProjectNav';
import { getProject } from '../database/accessProjects';
import ProjectDetail from './ProjectDetail';

class ProjectBody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.editContent = this.editContent.bind(this);
    this.updateProject = this.updateProject.bind(this);
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

  editContent(event){
    event.target.contentEditable = 'true';
  }

  updateProject(event){
    let project = this.props.activeProject;
    let key = event.target.parentElement.className;
    let value = event.target.innerText;
    project[key] = value;
    this.props.actions.updateProject(project.id, project)
  }

  render() {
    if (this.props.activeProject) {
      return(
        <div className='project-area'>
          <ProjectNav removeDetailView = {this.removeDetailView}/>
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
          <ProjectDetail project={this.props.activeProject}
                         handleClick={this.deactivateProject}
                         handleDelete={this.deleteProject}
                         handleChange={this.updateProjectState}
                         makeEditable={this.editContent}
                         update = {this.updateProject}/>
        </div>
      )
    } else {
      return(
        <div className='project-area'>
          <ProjectNav removeDetailView={this.removeDetailView}/>
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
        </div>
      )
    }
  }
}

ProjectBody.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBody);
