import { connect } from 'react-redux';
import BusinessShow from './business_show';
import {selectBusinessById} from '../../reducers/selectors';
import {fetchBusiness, updateBusiness} from '../../actions/business_actions';


const mapStateToProps = (state, ownProps) => ({
  business: selectBusinessById(state.entities, ownProps.match.params.businessId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  updateBusiness: (business) => dispatch(updateBusiness(business))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
