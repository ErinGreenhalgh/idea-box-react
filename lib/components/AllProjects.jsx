const React = require('react');
const ReactDOM = require('react-dom');

class AllProjects extends React.Component{
  render() {
    return (
      <div className="all-projects"> is this working </div>
    )
  }
};

ReactDOM.render(<AllProjects />, document.getElementById('layout'))
