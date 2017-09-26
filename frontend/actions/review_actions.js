export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

import {getReviews, postReview, patchReview, deleteReview, getReview} from '../util/review_api_util';


export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchReviews = (businessId) => dispatch => (
  getReviews(businessId)
    .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId) => dispatch => (
  getReview(reviewId)
    .then((review) => dispatch(receiveReview(review)))
);

export const createReview = (businessId, review) => dispatch => (
  postReview(businessId, review)
    .then((newReview) => dispatch(receiveReview(newReview)))
);

export const updateReview = (review) => dispatch => (
  patchReview(review)
    .then((updatedReview) => dispatch(receiveReview(updatedReview)))
);

export const destroyReview = (reviewId) => dispatch => (
  deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)))
);
