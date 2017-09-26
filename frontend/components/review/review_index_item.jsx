import React from 'react';

const ReviewIndexItem = ({review, currentUser}) => {
  return (
    <li className="review-index-item">
      <div className="user-info-wrapper">
        <img src="https://res.cloudinary.com/jun/image/upload/v1506464949/user_60_square_dsxggt.png" alt="User Logo"/>
        <div className="user-info">
          {currentUser.username}
        </div>
      </div>
      <div className="review-main">

      </div>
    </li>
  );
};

export default ReviewIndexItem;
