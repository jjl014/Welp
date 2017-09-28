import {connect} from 'react-redux';
import Recommendation from './recommendation';

const mapStateToProps = state => {
  return {
    businesses: state.entities.businesses
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendation);
