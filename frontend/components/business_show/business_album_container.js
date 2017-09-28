import { connect } from 'react-redux';
import BusinessAlbum from './business_album';
import {getImages} from '../../actions/image_actions';
import {selectImagesByBusiness} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    images: selectImagesByBusiness(state, ownProps.business.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getImages: (businessId) => dispatch(getImages(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessAlbum);
