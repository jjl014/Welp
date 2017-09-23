import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  businesses: state.entities.businesses
});

const mapDispatchToProps = dispatch => ({
  
});

connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
