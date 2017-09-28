import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import BusinessShow from './business_show';
import {selectBusinessById, selectReviewsByBusiness} from '../../reducers/selectors';
import {fetchBusiness, updateBusiness} from '../../actions/business_actions';
import {fetchReviews} from '../../actions/review_actions';
import {saveImage} from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  let reviews = selectReviewsByBusiness(state, ownProps.match.params.businessId);
  return {
    business: selectBusinessById(state.entities, ownProps.match.params.businessId),
    reviews,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  updateBusiness: (business) => dispatch(updateBusiness(business)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  saveImage: (imgUrl, businessId) => dispatch(saveImage(imgUrl, businessId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
