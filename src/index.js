import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './stores/store'
import { Provider } from 'react-redux'

console.log('STATE', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
