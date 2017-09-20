import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, register, clearSessionErrors } from '../../actions/session_actions';

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
  },
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
