import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = (state, ownProps) => {
  return {
    businesses: state.entities.businesses
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
