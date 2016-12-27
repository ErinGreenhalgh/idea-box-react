// import React from 'react';
//
// export default class ProjectDetail extends React.Component {
//   constructor() {
//     super()
//     this.makeEditable = this.makeEditable.bind(this)
//   }
//   makeEditable(event) {
//     event.target.contentEditable = 'true';
//   }
//
//   render() {
//     return(
//       <section className="project-detail overlay">
//         <article className='detail-content'>
//           <h1 id='close-detail' onClick={this.props.deactivateProject}> X </h1>
//           <table id='detail-table'>
//             <tbody>
//               <tr>
//                 <th>Name</th>
//                 <td id='project-name' onClick={this.makeEditable} onBlur={this.props.updateProject}>{this.props.project.name}</td>
//               </tr>
//               <tr>
//                 <th>Description</th>
//                 <td id='project-description' onClick={this.makeEditable} onBlur={this.props.updateProject}>{this.props.project.description} </td>
//               </tr>
//             </tbody>
//           </table>
//           <button id={this.props.project.id}
//             onClick={this.props.handleDelete}>Delete</button>
//         </article>
//       </section>
//     )
//   }
// }
