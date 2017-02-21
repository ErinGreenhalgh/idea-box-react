import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../actions/projectActions';
import NewProjectManager from './NewProjectManager';

class FormDisplayManager extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (<p>Hello Form Display Manager</p>)
  }
}

export default FormDisplayManager;
