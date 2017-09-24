import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const businesses = this.props.businesses;
    const businessList = Object.keys(businesses).map(businessKey => {
      return <BusinessIndexItem key={`business-item-${businessKey}`}
                                business={businesses[businessKey]}/>;
    });

    return (
      <div className="biz-index-container column-alpha">
        <div className="biz-index">
          <ul className="biz-index-ul">
            {businessList}
          </ul>
        </div>
      </div>
    );
  }
}