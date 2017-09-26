import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {selectReviewById} from '../../reducers/selectors';
import {createReview, updateReview,  fetchReviews, fetchReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let review;
  if (ownProps.match.url === `/reviews/${ownProps.match.params.reviewId}`) {
    formType = 'edit';
    review = selectReviewById(ownProps.match.params.reviewId);
  } else {
    formType = 'new';
  }
  return {
    formType,
    review
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (formType, review) => {
      if (formType === 'new') {
        return dispatch(createReview(review));
      } else {
        return dispatch(updateReview(review));
      }
    },
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
