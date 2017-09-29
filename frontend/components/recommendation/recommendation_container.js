import {connect} from 'react-redux';
import Recommendation from './recommendation';
import {asArray} from '../../reducers/selectors';
import {recommendedBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => {
  return {
    businesses: asArray(state.entities)
  };
};

const mapDispatchToProps = dispatch => ({
  recommendedBusinesses: () => dispatch(recommendedBusinesses("getrec"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendation);
