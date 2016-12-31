import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddProjectButton from './AddProjectButton'
import NewProjectManager from './NewProjectManager';
import ProjectDetail from './ProjectDetail';
import * as projectActions from '../actions/projectActions';

class ProjectNav extends React.Component {
  constructor(){
    super();
    this.state = {
      addProjectFormShowing: false,
      project: {}
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.updateProjectFields = this.updateProjectFields.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
  }

  toggleForm() {
    if (this.state.addProjectFormShowing == true) {
      this.setState({ addProjectFormShowing: false })
    } else {
      this.setState({ addProjectFormShowing: true })
    }
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let proj = this.state.project;
    proj[field] = event.target.value;
  }

  createNewProject(event){
    event.preventDefault();
    this.props.dispatch(projectActions.createProject(this.state.project));
    // this.props.actions.createProject(this.state.project);
    //why is bindActionCreators not working here / below?
  }

  showForm() {
    ReactDOM.render(<ProjectDetail project={this.state.project}
                                   handleClick={this.props.removeDetailView}
                                   handleChange={this.updateProjectFields}
                                   handleSubmit={this.createNewProject}/>,
                    document.getElementById('render-here'))
  }


  render() {
    return(
      <div>
        <section id="render-here"></section>
        <AddProjectButton handleClick={this.showForm}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {projects: state.projects}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(projectActions, dispatch)
//   }
// }

export default connect(mapStateToProps)(ProjectNav);
