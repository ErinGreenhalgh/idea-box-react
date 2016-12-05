const React = require('react');
const ReactDOM = require('react-dom');
import AllProjects from './AllProjects'

class Body extends React.Component {
  render() {
    return ( <AllProjects />)
  }
}

ReactDOM.render(<Body />, document.getElementById('layout'))
