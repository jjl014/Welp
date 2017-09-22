import React from 'react';
import { Link, Route } from 'react-router-dom';
import BusinessIndexContainer from './business_index_container';

export default class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="biz-search-container">
        <div className="column-1-3">
          <header className="biz-header">
            <Link to="/">Welp</Link>
          </header>
        </div>
        <div className="column-2-3">
          <div className="biz-search-wrap">
            <BusinessIndexContainer />
            <h1 style={{"fontSize": 70}}>MAP</h1>
          </div>
        </div>
      </div>
    );
  }
}
