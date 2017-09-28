import {connect} from 'react-redux';
import BusinessSearch from './business_search';

const mapStateToProps = state => ({
  businesses: state.entities.businesses
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessSearch);
