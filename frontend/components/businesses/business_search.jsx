import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from './business_index_container';
import FilterContainer from '../filter/filter_container';
import MapContainer from '../map/map_container';
import BusinessFormContainer from '../business_form/business_form_container';
import BusinessShowContainer from '../business_show/business_show_container';
import ReviewFormContainer from '../review/review_form_container';
import HeaderContainer from '../headers/header_container';
import {ProtectedRoute} from '../../util/route_util';

export default class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="biz-search-container">
        <HeaderContainer />
        <Route exact path="/businesses" component={FilterContainer} />
        <Route exact path="/businesses" render={() => (
          <div className="biz-search-wrap">
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <div className="column-beta">
              <div className="map-wrapper">
                <Route exact path="/businesses" render={(props) => (
                    <MapContainer {...props} type="search"/>
                  )}/>
              </div>
            </div>
          </div>
        )}/>
        <Switch>
          <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={ReviewFormContainer}/>
          <ProtectedRoute path="/businesses/:businessId/reviews/:reviewId/edit" component={ReviewFormContainer}/>
          <Route exact path="/businesses/:businessId/edit" component={BusinessFormContainer}/>
          <ProtectedRoute exact path="/businesses/new" component={BusinessFormContainer} />
          <Route path="/businesses/:businessId" component={BusinessShowContainer}/>
        </Switch>
      </div>
    );
  }
}
