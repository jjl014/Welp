import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import {getGeoFromAddress} from './util/map_api_util';

window.getGeoFromAddress = getGeoFromAddress;

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
