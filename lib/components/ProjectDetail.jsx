import React from 'react';

export default class ProjectDetail extends React.Component {

  render() {
    console.log("project:", this.props.project)
    if (this.props.project === null) {
      return(
        <div> No project selected</div>
      )
    } else {
      return(
        <section className="project-detail">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{this.props.project.name}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{this.props.project.description} </td>
              </tr>
            </tbody>
          </table>
        </section>
      )
    }
  }
}
