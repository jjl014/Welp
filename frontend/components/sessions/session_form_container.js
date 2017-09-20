import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, register } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.match.url === '/signup' ? 'signup' : 'signin'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user, formType) => {
    if (formType === 'signup') {
      return dispatch(register(user));
    } else {
      return dispatch(signin(user));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
