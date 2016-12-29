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
    this.state = {
      activeProject: null
    }
    this.selectActive = this.selectActive.bind(this);
    this.deactivateProject = this.deactivateProject.bind(this);
  }

  selectActive(event) {
    let id = event.target.id
    this.props.actions.getProject(id);
    //above is an async function
    //below has not waited for data to be returned before setting project
    //need to account for the wait
    let project = this.props.project
    // getProject(id).then(project => {
    //   let activeProject = Object.assign({}, project, {id})
    //   this.setState({ activeProject })
    // })
  }

  deactivateProject(){
    this.setState({activeProject: null})
  }

  render() {
    if (this.state.activeProject) {
      return(
        <div className='project-area'>
          <ProjectNav />
          <ProjectsTable projects={this.props.projects}
            selectActive={this.selectActive}/>
          <ProjectDetail project={this.state.activeProject}
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

//proptype validations go here (do more research on this)
ProjectBody.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects,
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBody);
