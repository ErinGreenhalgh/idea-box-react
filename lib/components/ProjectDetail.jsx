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
          <h1 id='close-detail' onClick={this.props.deactivateProject}> X </h1>
          <article className='detail-content'>
            <table className="detail-component">
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
            <button className='detail-component' id={this.props.project.id}
              onClick={this.props.handleDelete}>Delete</button>
          </article>
        </section>
      )
    }
  }
}
