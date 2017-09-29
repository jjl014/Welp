import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({business}) => {
  let businessPrice;
  switch(business.price) {
    case 1:
      businessPrice = "$";
      break;
    case 2:
      businessPrice = "$$";
      break;
    case 3:
      businessPrice = "$$$";
      break;
    case 4:
      businessPrice = "$$$$";
      break;
  }
  const ar = business.avg_rating;

  let avgRating;
  if (ar < 1.5) {
    avgRating = <div className="stars-med stars-med-1"></div>;
  } else if (ar < 2) {
    avgRating = <div className="stars-med stars-med-1-5"></div>;
  } else if (ar < 2.5) {
    avgRating = <div className="stars-med stars-med-2"></div>;
  } else if (ar < 3) {
    avgRating = <div className="stars-med stars-med-2-5"></div>;
  } else if (ar < 3.5) {
    avgRating = <div className="stars-med stars-med-3"></div>;
  } else if (ar < 4) {
    avgRating = <div className="stars-med stars-med-3-5"></div>;
  } else if (ar < 4.5) {
    avgRating = <div className="stars-med stars-med-4"></div>;
  } else if (ar < 5) {
    avgRating = <div className="stars-med stars-med-4-5"></div>;
  } else {
    avgRating = <div className="stars-med stars-med-5"></div>;
  }

  return (
    <div className="biz-index-item-container">
      <div className="biz-index-item">
        <div className="biz-main-listing">
          <div className="biz-detail">
            <img className="biz-media"
              src={`${business.img_preview}`}/>
            <div className="biz-media-story">
              <div className="biz-name"><Link to={`/businesses/${business.id}`}>{business.name}</Link></div>
              <div className="biz-rating-num h-box">
                <div className="biz-rating">
                  {avgRating}
                </div>
                <p>{business.num_reviews} reviews</p>
              </div>
              <div className="biz-price-category">{businessPrice}</div>
            </div>
          </div>
          <div className="biz-address">
            {business.address}<br/>
            {business.city}, {business.state} {business.zipcode}<br/>
            {business.phone}
          </div>
        </div>
        <div className="biz-review-preview h-box">
          <img className="user-profile-pic" src={`${business.review_preview.user_img}`} alt="User Logo"/>
          <p>{business.review_preview.review}</p>
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
