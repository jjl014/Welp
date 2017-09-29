import React from 'react';
import RecommendationItem from './recommendation_item';

export default class Recommendation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.businesses.length > 2) {
      const businesses = this.props.businesses.slice(0,3).map((business,i) => {
        return <RecommendationItem key={`rec-biz-${i}`} business={business} />;
      });
      return (
        <div className="recommendation-container v-box">
          <h2>Featured Businesses</h2>
          <div className="featured-biz h-box">
            {businesses}
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
