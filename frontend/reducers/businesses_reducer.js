import merge from 'lodash/merge';
import { RECEIVE_BUSINESS,
         RECEIVE_BUSINESSES,
         REMOVE_BUSINESS,
         UPDATE_BUSINESS } from '../actions/business_actions';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case UPDATE_BUSINESS:
    case RECEIVE_BUSINESS:
      newState[action.business.id] = action.business;
      return newState;
    case REMOVE_BUSINESS:
      delete newState[action.businessId];
      return newState;
    default:
      return state;
  }
};

export default BusinessesReducer;
