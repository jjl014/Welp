import {Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/"/>
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/signin"/>
    )
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps, undefined)(Auth));
