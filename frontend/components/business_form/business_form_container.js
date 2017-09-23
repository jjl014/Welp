import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessForm from './business_form';
import {createBusiness, patchBusiness, fetchBusiness, clearBusinessErrors} from '../../actions/business_actions';
import {selectBusinessById} from '../../reducers/selectors';

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
    if (formType === 'new') {
      return dispatch(createBusiness(business));
    } else {
      return dispatch(patchBusiness(business));
    }
  },
  clearBusinessErrors: () => dispatch(clearBusinessErrors),
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
