import merge from 'lodash/merge';
import {RECEIVE_BUSINESS,
        RECEIVE_BUSINESSES,
        CLEAR_BUSINESS_ERRORS,
        RECEIVE_BUSINESS_ERRORS} from '../actions/business_actions';

const BusinessErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      return action.errors;
    case RECEIVE_BUSINESS:
    case RECEIVE_BUSINESSES:
    case CLEAR_BUSINESS_ERRORS:
      return [];
    default:
      return state;
  }
};

export default BusinessErrorsReducer;
