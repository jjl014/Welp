import { connect, withRouter } from 'react-redux';
import ReviewIndex from './review_index';
import {selectReviewsByBusinessId} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  business: selectReviewsByBusinessId(
                state.entities,
                ownProps.match.params.businessId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
