import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user});
    default:
      return state;
  }
};

export default SessionReducer;
