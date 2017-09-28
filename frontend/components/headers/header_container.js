import {connect} from 'react-redux';
import Header from './header';
import {withRouter} from 'react-router-dom';
import {searchBusinesses} from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  businessesSearch: () => dispatch(searchBusinesses())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
