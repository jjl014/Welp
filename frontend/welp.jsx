import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import {getAllBusinesses, getBusiness, postBusiness, patchBusiness, destroyBusiness} from './util/business_api_util';
import {fetchBusinesses, createBusiness, updateBusiness, deleteBusiness} from './actions/business_actions';

window.getAllBusinesses = getAllBusinesses;
window.getBusiness = getBusiness;
window.postBusiness = postBusiness;
window.patchBusiness = patchBusiness;
window.destroyBusiness = destroyBusiness;

window.fetchBusinesses = fetchBusinesses;
window.createBusiness = createBusiness;
window.updateBusiness = updateBusiness;
window.deleteBusiness = deleteBusiness;

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
