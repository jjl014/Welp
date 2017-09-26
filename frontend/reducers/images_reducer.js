import {RECEIVE_IMAGES, RECEIVE_IMAGE} from '../actions/image_actions';
import merge from 'lodash/merge';

const ImagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_IMAGES:
      return merge(newState, action.images);
    case RECEIVE_IMAGE:
      return merge(newState, action.image);
    default:
      return state;
  }
};

export default ImagesReducer;
