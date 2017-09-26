import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import {selectReviewsByBusiness} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    business: ownProps.business,
    businessReviews: selectReviewsByBusiness(state, ownProps.business.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
