export const selectBusinessById = ({businesses}, id) => {
  return businesses[id];
};

export const selectReviewById = ({reviews}, id) => {
  return reviews[id];
};

export const asArray = ({businesses}) => {
  return Object.keys(businesses).map(key => businesses[key]);
};

export const selectReviewsByBusiness = (state, businessId) => {
  const reviews = asValueArray(state.entities.reviews);
  const filteredReviews = reviews.filter(review =>
                                 review.business_id === parseInt(businessId));
  return filteredReviews;
};

export const selectReviewsByUser = (state, businessId) => {
  const currentUser = state.session.currentUser;
  const reviews = asValueArray(state.reviews);
  const userReviews = state.reviews.filter( review => {
    if (review.business_id === businessId && review.user_id === currentUser.id) {
      return true;
    }
    return false;
  });
};

const asValueArray = obj => (
  Object.keys(obj).map(key => obj[key])
);
