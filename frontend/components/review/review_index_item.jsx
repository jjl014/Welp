import React from 'react';

const ReviewIndexItem = ({review}) => {
  let rev = "review";
  if (review.user.num_reviews > 1) {
    rev = "reviews";
  }
  return (
    <li className="review-index-item h-box">
      <div className="user-info-wrapper h-box">
        <img className="user-profile-pic" src="https://res.cloudinary.com/jun/image/upload/v1506464949/user_60_square_dsxggt.png" alt="User Logo"/>
        <div className="user-info">
          <h4>{review.user.username}</h4>
          <p><b>{review.user.num_reviews}</b> {rev}</p>
        </div>
      </div>
      <div className="review-main v-box">
        <div className="review-rating-date h-box">
          <div className="review-rating">
            <img src="https://res.cloudinary.com/jun/image/upload/v1506362363/five_stars_wbd6ym.png"/>
          </div>
          <div className="review-date">{review.created_at}</div>
        </div>
        <p>{review.body}</p>
      </div>
    </li>
  );
};

export default ReviewIndexItem;
