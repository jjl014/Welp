import React from 'react';
import { Link } from 'react-router-dom';

const RecommendationItem = ({business}) => {
  const ar = business.avg_rating;
  let businessPrice;
  let price = business.price;
  if (price === 4) {
    businessPrice = "$$$$";
  } else if (price === 3) {
    businessPrice = "$$$";
  } else if (price === 2) {
    businessPrice = "$$";
  } else {
    businessPrice = "$";
  }

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
    <div className="featured-biz-item">
      <Link to={`/businesses/${business.id}`}><img src={business.img_preview} alt="Featured Business"/></Link>
      <div className="featured-biz-info">
        <Link to={`/businesses/${business.id}`}>{business.name}</Link>
        <div className="h-box">
          {avgRating}
          {business.num_reviews} Reviews
        </div>
        <div>{businessPrice}</div>
      </div>
    </div>
  );
};

export default RecommendationItem;
