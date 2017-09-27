import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({business}) => {
  return (
    <div className="biz-index-item-container">
      <div className="biz-index-item">
        <div className="biz-main-listing">
          <div className="biz-detail">
            <img className="biz-media"
              src="https://res.cloudinary.com/jun/image/upload/v1506033108/business_90_square_i61t6u.png"/>
            <div className="biz-media-story">
              <div className="biz-name"><Link to={`/businesses/${business.id}`}>{business.name}</Link></div>
              <div className="biz-rating">5</div>
              <div className="biz-price-category">{business.price}</div>
            </div>
          </div>
          <div className="biz-address">
            {business.address}<br/>
            {business.city}, {business.state} {business.zipcode}<br/>
            {business.phone}
          </div>
        </div>
        <div className="biz-review-preview h-box">
          <img className="user-profile-pic" src="https://res.cloudinary.com/jun/image/upload/v1506464949/user_60_square_dsxggt.png" alt="User Logo"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea...</p>
        </div>
      </div>
    </div>
  );
};

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

export default BusinessIndexItem;
