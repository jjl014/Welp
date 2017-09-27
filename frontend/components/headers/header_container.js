import {connect} from 'react-redux';
import Header from './header';
import {businessSearch} from '../../actions/business_actions';

const mapDispatchToProps = dispatch => ({
  businessSearch: () => dispatch(businessSearch())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
