import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  //   if (Object.keys(this.props.businesses).length === 0) {
  //     this.props.fetchBusinesses()
  //       .then(() => {
          document.querySelectorAll('p').forEach((el) => {
            el.innerText = this.truncateText('p', 170);
          });
      // });
    // }
  }

  componentWillReceiveProps(newProps) {
    document.querySelectorAll('p').forEach((el) => {
      el.innerText = this.truncateText('p', 170);
    });
  }

  truncateText(selector, maxLength) {
      var element = document.querySelector(selector),
          truncated = element.innerText;

      if (truncated.length > maxLength) {
          truncated = truncated.substr(0,maxLength) + '...';
      }
      return truncated;
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
