import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div className="super-container">
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <AuthRoute path="/login" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
