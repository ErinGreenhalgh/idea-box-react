import React from 'react';

export default class ProjectDetail extends React.Component {

  render() {
    console.log("project:", this.props.project)
    if (this.props.project === null) {
      return(
        <div> </div>
      )
    } else {
      return(
        <section className="project-detail overlay">
          <article className='detail-content'>
            <h1 id='close-detail' onClick={this.props.deactivateProject}> X </h1>
            <table id='detail-table'>
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
            <button id={this.props.project.id}
              onClick={this.props.handleDelete}>Delete</button>
          </article>
        </section>
      )
    }
  }
}
