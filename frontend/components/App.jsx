import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessSearch from './businesses/business_search';

const App = () => {
  return (
    <div className="super-container">
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <Route path="/businesses" component={BusinessSearch}/>
    </div>
  );
};

export default App;
