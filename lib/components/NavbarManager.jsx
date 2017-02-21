import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import NewProjectManager from './NewProjectManager';

class NavbarManager extends React.Component {
  constructor(){
    super();
    this.showForm = this.showForm.bind(this);
  }

  showForm(){
    debugger;
    ReactDOM.render(<NewProjectManager />, document.getElementById("form-detail"))
  }

  render(){
    return(
      <Navbar clickAdd={this.showForm}/>
    )
  }
}

export default NavbarManager;
