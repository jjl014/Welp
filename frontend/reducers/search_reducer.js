import merge from 'lodash/merge';
import {SEARCH_BUSINESSES, CLEAR_SEARCH} from '../actions/business_actions';


const _initialState = {
  query: null
};

const SearchReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case SEARCH_BUSINESSES:
      return merge(newState, {query: action.query});
    case CLEAR_SEARCH:
      return {query: null};
    default:
      return state;
  }
};

export default SearchReducer;
