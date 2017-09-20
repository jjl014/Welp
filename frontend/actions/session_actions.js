export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import { login, logout, signup } from '../util/session_api_util';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const register = (user) => dispatch => (
  signup(user)
    .then((newUser) => dispatch(receiveCurrentUser(user)),
          (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const signin = (user) => dispatch => (
  login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
          (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const signout = () => dispatch => (
  logout()
    .then(() => dispatch(receiveCurrentUser(null)),
          (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);
