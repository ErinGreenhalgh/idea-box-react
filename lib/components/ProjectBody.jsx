import React, { PropTypes } from 'react';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';

class ProjectBody extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <ProjectsTable projects={this.props.projects}/>
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
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBody);
