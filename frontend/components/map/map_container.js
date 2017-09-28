import { connect } from 'react-redux';
import Map from './map';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let businesses;
  if (Object.keys(state.entities.businesses).length !== 0) {
    businesses = asArray(state.entities);
  }
  return {
    businesses
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
