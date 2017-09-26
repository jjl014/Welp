import merge from 'lodash/merge';
import {RECEIVE_REVIEWS,
        RECEIVE_REVIEW,
        UPDATE_REVIEW,
        REMOVE_REVIEW} from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge(newState, action.reviews);
    case RECEIVE_REVIEW:
      return merge(newState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
