import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessForm from './business_form';
import {createBusiness, updateBusiness, fetchBusiness, clearBusinessErrors} from '../../actions/business_actions';
import {selectBusinessById} from '../../reducers/selectors';
import {getGeoFromAddress} from '../../util/map_api_util';
import {addInputCallBack} from '../../util/general_util';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let business;
  if (ownProps.match.url === '/businesses/new')
    formType = 'new';
  else {
    formType = 'edit';
    business = selectBusinessById(state.entities, ownProps.match.params.businessId);
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.business,
    formType,
    business
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (business, formType) => {
    debugger;
    if (formType === 'new') {
      return dispatch(createBusiness(business));
    } else {
      return dispatch(updateBusiness(business));
    }
  },
  clearBusinessErrors: () => dispatch(clearBusinessErrors),
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  getGeoFromAddress: (address) => getGeoFromAddress(address)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm));
