import { connect } from 'react-redux';
import Greeting from './greeting';
import { signout, signin } from '../../actions/session_actions';
import { searchBusinesses, fetchBusinesses, recommendedBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  searchBusinesses: () => dispatch(searchBusinesses()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  recommendedBusinesses: () => dispatch(recommendedBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
