import React, { PropTypes } from 'react';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import NewProjectManager from './NewProjectManager';
import AddProjectButton from './AddProjectButton';

class ProjectBody extends React.Component {
  constructor() {
    super()
    this.state = {
      addProjectFormShowing: false
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    if (this.state.addProjectFormShowing == true) {
      this.setState({ addProjectFormShowing: false })
    } else {
      this.setState({ addProjectFormShowing: true })
    }
  }

  render() {
    let button = <AddProjectButton handleClick={this.toggleForm}/>
    let table = <ProjectsTable projects={this.props.projects}/>
    let manager = <NewProjectManager toggleForm={this.toggleForm}/>

    if (this.state.addProjectFormShowing == false) {
      return(
        <div className='project-area'>
          <nav className='project-nav'>
            {button}
          </nav>
          {table}
        </div>
      )
    } else {
      return(
        <div className='project-area'>
          <nav className='project-nav'>
            {manager}
          </nav>
          {table}
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
