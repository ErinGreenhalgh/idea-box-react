import React, { PropTypes } from 'react';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import ProjectNav from './ProjectNav';
import { getProject } from '../database/accessProjects';
import ProjectDetail from './ProjectDetail';

class ProjectBody extends React.Component {
  constructor() {
    super();
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
  }

  selectActive(event) {
    let id = event.target.id
    this.props.actions.getProject(id);
  }

  deactivateProject(){
    this.props.actions.clearProject();
  }

  render() {
    if (this.props.activeProject) {
      return(
        <div className='project-area'>
          <ProjectNav />
          <ProjectsTable projects={this.props.projects}
                         selectActive={this.selectActive}/>
          <ProjectDetail project={this.props.activeProject}
                         deactivateProject={this.deactivateProject}/>
        </div>
      )
    } else {
      return(
        <div className='project-area'>
          <ProjectNav />
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
