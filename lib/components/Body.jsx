const React = require('react');
const ReactDOM = require('react-dom');
const AllProjects = require('./AllProjects');

class Body extends React.Component {
  render() {
    return ( <AllProjects />)
  }
}

ReactDOM.render(<Layout />, document.getElementById('layout'))
