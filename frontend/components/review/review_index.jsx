import ReviewIndexItem from './review_index_item';
import React from 'react';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchReviews(this.props.business.id);
  }

  render() {
    const reviews = this.props.businessReviews.map((review, idx) => {
      return <ReviewIndexItem key={`review-${idx}`} review={review}/>;
    });
    const business = this.props.business;
    return(
      <div className="review-index-container column-2-3">
        <h2>Reviews <b>for {business.name}</b></h2>
        <ul className= "review-index-ul">
          {reviews}
        </ul>
      </div>
    );
  }
}
