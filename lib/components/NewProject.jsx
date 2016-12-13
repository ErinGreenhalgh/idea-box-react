import React from 'react';

export default class NewProject extends React.Component {

  render() {
    let formShowing = this.props.formShowing;
    let htmlShown = null;
    if (!formShowing) {
      htmlShown = <button onClick={ this.props.showForm } > + Add a Project </button>
    } else if (formShowing){
      htmlShown =
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="name" placeholder='Project Name' value={this.props.name} onChange={this.props.handleNameChange}/>
        <input type="text" name="description" placeholder='Project Description' value={this.props.description} onChange={this.props.handleDescChange}/>
        <input type="submit" value="Add"/>
      </form>
    }

    return (
      <nav>
        { htmlShown }
      </nav>
    )
  }
}
