import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import setAuthorizationToken from './Components/Utils/setAuthorizationToken';

setAuthorizationToken(localStorage.getItem('token'));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
