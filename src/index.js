import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import reducer from './Components/Store/reducer'
import setAuthorizationToken from './Components/Utils/setAuthorizationToken';

setAuthorizationToken(localStorage.getItem('token'));

const logger = store => {
  return next => {
    return action => {
      //console.log('[Middleware] dispatching', action);
      const result = next(action);
      //console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
