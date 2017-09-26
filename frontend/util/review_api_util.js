export const getReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/reviews`
  })
);

export const getReview = (reviewId) => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  })
);

export const postReview = (businessId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/reviews`,
    data: {review}
  })
);

export const patchReview = (review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {review}
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
);
