import React from 'react';

export default class NewProject extends React.Component {
  constructor() {
    super()
    this.state = {formShowing: false, value: ''}
    this.showForm = this.showForm.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  showForm () {
    this.setState({ formShowing: true })
  }

  handleNameChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //need to send this info to firebase
    console.log("name submitted:", this.state.value)
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
        <input type="text" name="name" placeholder='Project Name' value={this.state.value} onChange={this.handleNameChange}/>
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
