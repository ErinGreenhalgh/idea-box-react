import React from 'react';
import { allProjects } from "../dataFetcher"

export default class AllProjects extends React.Component{
  constructor() {
    super();
    this.state = {projects: []}
  }

  componentDidMount() {
    this.setState({ projects: allProjects() }) ;
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
