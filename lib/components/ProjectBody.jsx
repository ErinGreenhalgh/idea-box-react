import React from 'react';
import ProjectsTable from './ProjectsTable';
import { connect } from 'react-redux';

class ProjectBody extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div> "Hello world!"</div>
    )
  }
}

//proptype validations go here (do more research on this)

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  }
}

// function mapDispatchToProps(dispatch) {
//   return "hello";
// }

export default connect(mapStateToProps)(ProjectBody);
