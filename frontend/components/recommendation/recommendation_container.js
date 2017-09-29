import {connect} from 'react-redux';
import Recommendation from './recommendation';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    businesses: asArray(state.entities)
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendation);
