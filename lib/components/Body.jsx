import React from 'react';
import ReactDOM from 'react-dom'
import AllProjects from './AllProjects';
import NewProject from './NewProject';

class Body extends React.Component {
  render() {
    return (
      <div>
        <NewProject />
        <AllProjects />
      </div>
    )
  }
}

ReactDOM.render(<Body />, document.getElementById('layout'))
