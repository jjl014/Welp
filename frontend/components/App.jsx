import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import SessionFormContainer from './sessions/session_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessSearch from './businesses/business_search';
import FourZeroFour from './fourzerofour';
import Footer from './footer';

const App = () => {
  return (
    <div className="super-container">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer}/>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <Route path="/businesses" component={BusinessSearch}/>
        <Route component={FourZeroFour}/>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
