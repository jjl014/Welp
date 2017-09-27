import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {selectReviewById, selectBusinessById} from '../../reducers/selectors';
import {fetchBusiness} from '../../actions/business_actions';
import {createReview, updateReview,  fetchReviews, fetchReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let review;
  let business;
  if (ownProps.match.url === `/reviews/${ownProps.match.params.reviewId}`) {
    formType = 'edit';
    review = selectReviewById(ownProps.match.params.reviewId);
  } else {
    formType = 'new';
  }
  return {
    business: selectBusinessById(state.entities, ownProps.match.params.businessId),
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
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
