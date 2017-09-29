import merge from 'lodash/merge';
import { RECEIVE_BUSINESS,
         RECEIVE_BUSINESSES,
         REMOVE_BUSINESS,
         UPDATE_BUSINESS,
         RECEIVE_SEARCH_BUSINESSES,
         RECEIVE_RECOMMENDED_BUSINESSES,
         CLEAR_BUSINESSES} from '../actions/business_actions';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_BUSINESSES:
    case RECEIVE_RECOMMENDED_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESSES:
      return merge(newState, action.businesses);
    case UPDATE_BUSINESS:
    case RECEIVE_BUSINESS:
      return merge(newState, {[action.business.id]: action.business});
    case REMOVE_BUSINESS:
      delete newState[action.businessId];
      return newState;
    case CLEAR_BUSINESSES:
      return {};
    default:
      return state;
  }
};

export default BusinessesReducer;
