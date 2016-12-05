const React = require('react');
const ReactDOM = require('react-dom');
const dataFetcher = require('../dataFetcher.js');
const axios = require('axios');

export default class AllProjects extends React.Component{
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
        <tr key={project.name}>
          <td>{project.name}</td>
          <td>{project.description}</td>
        </tr>
      )
    })

    return (
      <div className="all-projects">
        <table>
          <tbody>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
            {projects}
          </tbody>
        </table>
      </div>
    )
  }
};
