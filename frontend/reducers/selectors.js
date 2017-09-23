export const selectBusinessById = ({businesses}, id) => {
  return businesses[id];
};

export const asArray = ({businesses}) => {
  return Object.keys(businesses).map(key => businesses[key]);
};

export const selectReviewsByBusiness = ({reviews}, businessId) => {
  const filteredReviews = reviews.filter(review =>
                                 review.business_id === businessId);
  return filteredReviews;
};
