import React from 'react';

const ReviewIndexItem = ({review}) => {
  let rev = "review";
  if (review.user.num_reviews > 1) {
    rev = "reviews";
  }

  let rating;
  switch (review.rating) {
    case 1:
      rating = <div className="stars-med stars-med-1"></div>;
      break;
    case 2:
      rating = <div className="stars-med stars-med-2"></div>;
      break;
    case 3:
      rating = <div className="stars-med stars-med-3"></div>;
      break;
    case 4:
      rating = <div className="stars-med stars-med-4"></div>;
      break;
    case 5:
      rating = <div className="stars-med stars-med-5"></div>;
      break;
  }

  return (
    <li className="review-index-item h-box">
      <div className="user-info-wrapper h-box">
        <img className="user-profile-pic" src={`${review.user.img_url}`} alt="User Logo"/>
        <div className="user-info">
          <h4>{review.user.username}</h4>
          <p><b>{review.user.num_reviews}</b> {rev}</p>
        </div>
      </div>
      <div className="review-main v-box">
        <div className="review-rating-date h-box">
          <div className="review-rating">
            {rating}
          </div>
          <div className="review-date">{review.created_at}</div>
        </div>
        <p>{review.body}</p>
      </div>
    </li>
  );
};

export default ReviewIndexItem;
