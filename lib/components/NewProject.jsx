import React from 'react';
import firebase from 'firebase';

export default class NewProject extends React.Component {
  constructor() {
    super()
    this.state = {formShowing: false, name: '', decription: ''}
    this.showForm = this.showForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showForm () {
    this.setState({ formShowing: true })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  //refactor these into one method
  handleDescChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    let ref = firebase.database().ref('projects/');
    let newProjectRef = ref.push();
    newProjectRef.set({
      name: this.state.name,
      description: this.state.description
    })
    event.preventDefault();
  }

  render() {
    let formShowing = this.state.formShowing;
    let htmlShown = null;
    if (!formShowing) {
      htmlShown = <button onClick={ this.showForm } > + Add a Project </button>
    } else if (formShowing){
      htmlShown =
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder='Project Name' value={this.state.name} onChange={this.handleNameChange}/>
        <input type="text" name="description" placeholder='Project Description' value={this.state.description} onChange={this.handleDescChange}/>
        <input type="submit" value="Add Project"/>
      </form>
    }

    return (
      <div>
        { htmlShown }
      </div>
    )
  }
}
