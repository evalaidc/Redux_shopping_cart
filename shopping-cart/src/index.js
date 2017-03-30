import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';

//provider is a special type of component,
// wrap our App component with a store that encapsulates local state
// within App components
import { Provider } from 'react-redux'
import Store from './Store'

const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
  <App />
  </Provider>,
  document.getElementById('root')
);
