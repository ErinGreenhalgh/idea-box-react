import './reset'
import './styles';
import './components/Body';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import { loadProjects } from './actions/projectActions';

const store = configureStore();
store.dispatch(loadProjects());

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
