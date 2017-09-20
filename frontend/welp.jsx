import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { login, logout, signup } from './util/session_api_util';
import { register, signin, signout } from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signup = signup;

window.register = register;
window.signin = signin;
window.signout = signout;



document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
