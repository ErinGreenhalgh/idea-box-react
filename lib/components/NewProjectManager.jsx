import React, { PropTypes } from 'react';
import NewProjectForm from './NewProjectForm';
import { connect } from 'react-redux';

class NewProjectManager extends React.Component {
  constructor(){
    super();
    this.state = { project: {} }
    this.updateProjectFields = this.updateProjectFields.bind(this);
  }

  updateProjectFields(event) {
    const field = event.target.name;
    let project = this.state.project;
    project[field] = event.target.value;
    return this.setState({ project: project });
  }

  render() {
    return(
      <NewProjectForm project={this.state.project}
                      onChange={this.updateProjectFields}/>
    )
  }
}


// function mapStateToProps(state, ownProps) {
//   return {
//     project: state.project
//   }
// }

// export default connect(mapStateToProps)(NewProjectManager);
export default NewProjectManager;
