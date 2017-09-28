import {connect} from 'react-redux';
import Header from './header';
import {withRouter} from 'react-router-dom';
import {searchBusinesses} from '../../actions/business_actions';
import {signout} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  businessesSearch: () => dispatch(searchBusinesses()),
  signout: () => dispatch(signout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
