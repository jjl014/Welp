import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import BusinessShow from './business_show';
import {selectBusinessById,
        selectReviewsByBusiness,
        selectImagesByBusiness} from '../../reducers/selectors';
import {fetchBusiness, updateBusiness} from '../../actions/business_actions';
import {fetchReviews} from '../../actions/review_actions';
import {saveImage, getImages} from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  let reviews = selectReviewsByBusiness(state, businessId);
  let images = selectImagesByBusiness(state, businessId);
  return {
    business: selectBusinessById(state.entities, businessId),
    reviews,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  updateBusiness: (business) => dispatch(updateBusiness(business)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  saveImage: (imgUrl, businessId) => dispatch(saveImage(imgUrl, businessId)),
  getImages: (businessId) => dispatch(getImages(businessId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
