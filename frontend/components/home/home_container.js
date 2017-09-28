import {connect} from 'react-redux';
import Home from './home';
import {recommendedBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  recommendedBusinesses: () => dispatch(recommendedBusinesses("getrec"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
