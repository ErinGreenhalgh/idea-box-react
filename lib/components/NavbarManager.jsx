import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import FormManager from './FormManager';

class NavbarManager extends React.Component {
  constructor(){
    super();
    this.showForm = this.showForm.bind(this);
  }

  showForm(){
    ReactDOM.render(<FormManager />, document.getElementById("form-detail"))
  }

  render(){
    return(
      <Navbar clickAdd={this.showForm}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {};
}

function mapDispatchToProps(dispatch){
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarManager);
