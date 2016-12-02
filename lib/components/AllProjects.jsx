const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class AllProjects extends React.Component{
  constructor() {
    super();
    this.state = {projects: []}
  }

  componentDidMount() {
    axios.get("https://project-manager-18532.firebaseio.com/projects.json?")
         .then( (response) => {
           console.log("response:", Object.keys(response.data))
           this.setState({ projects: response.data});
         })
         .catch( (error) => {
           console.log(error);
           return error;
         });
  }

  render() {
    let projects = this.state.projects.map((project) => {
      return (
        <table>
          <tr>
            <td>{project.name}</td>
            <td>{project.description}</td>
          </tr>
        </table>
      )
    })

    return (
      <div className="all-projects">
        {projects}
      </div>
    )
  }
};

ReactDOM.render(<AllProjects />, document.getElementById('layout'))

// export { AllProjects };
