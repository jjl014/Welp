import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {selectReviewById, selectBusinessById} from '../../reducers/selectors';
import {fetchBusiness} from '../../actions/business_actions';
import {createReview, updateReview,  fetchReviews, fetchReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let review;
  let business;
  if (ownProps.match.url === `/businesses/${ownProps.match.params.businessId}/reviews/new`) {
    formType = 'new';
  } else {
    formType = 'edit';
    review = selectReviewById(state.entities, ownProps.match.params.reviewId);
  }
  return {
    business: selectBusinessById(state.entities, ownProps.match.params.businessId),
    formType,
    review
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (formType, review, businessId) => {
      if (formType === 'new') {
        return dispatch(createReview(businessId, review));
      } else {
        return dispatch(updateReview(businessId, review));
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
