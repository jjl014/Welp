import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import {fetchBusinesses, clearBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => ({
  businesses: state.entities.businesses
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  clearBusinesses: () => dispatch(clearBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
