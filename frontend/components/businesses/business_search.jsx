import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from './business_index_container';
import FilterContainer from '../filter/filter_container';
import MapContainer from '../map/map_container';
import BusinessFormContainer from '../business_form/business_form_container';
import BusinessShowContainer from '../business_show/business_show_container';
import Header from '../headers/header';

export default class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="biz-search-container">
        <Header />
        <Route exact path="/businesses" component={FilterContainer} />
        <Route exact path="/businesses" render={() => (
          <div className="biz-search-wrap">
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses" component={MapContainer} />
          </div>
        )}/>
        <Switch>
          <Route path="/businesses/:businessId/edit" component={BusinessFormContainer}/>
          <Route exact path="/businesses/new" component={BusinessFormContainer} />
          <Route path="/businesses/:businessId" component={BusinessShowContainer}/>
        </Switch>
      </div>
    );
  }
}
