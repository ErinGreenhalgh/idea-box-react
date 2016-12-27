import React, { PropTypes } from 'react';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import NewProjectManager from './NewProjectManager';

class ProjectBody extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="project-area">
        <NewProjectManager />
        <ProjectsTable projects={this.props.projects}/>
      </div>
    )
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
