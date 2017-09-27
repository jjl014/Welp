import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import {searchBusinesses} from '../../actions/business_actions';

const mapDispatchToProps = dispatch => ({
  searchBusinesses: (searchKeyword) => dispatch(searchBusinesses(searchKeyword))
});

export default withRouter(connect(
  undefined,
  mapDispatchToProps
)(Search));
