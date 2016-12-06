import React from 'react';

export default class NewProject extends React.Component {
  constructor() {
    super()
    this.state = {formShowing: false}
    this.showForm = this.showForm.bind(this)
  }
  showForm () {
    this.setState({ formShowing: true })
  }

  render() {
    let formShowing = this.state.formShowing;
    let htmlShown = null;
    if (!formShowing) {
      htmlShown = <button onClick={ this.showForm } > + Add a Project </button>
    } else if (formShowing){
      htmlShown = <h3> This is the new project form! </h3>
    }

    return (
      <div>
        { htmlShown }
      </div>
    )
  }
}
