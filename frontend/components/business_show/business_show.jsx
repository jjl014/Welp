import React from 'react';
import {Link} from 'react-router-dom';

export default class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.business) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.businessId !== this.props.match.params.businessId) {
      this.props.fetchBusiness(newProps.match.params.businessId);
    }
  }

  render() {
    const business = this.props.business;
    if (business) {
      return (
        <div className="biz-show-container max-w-1020 center">
          <div className="biz-page-main">
            <div className="biz-page-header">
              <div className="biz-header-left column-1-2">
                <h1>{business.name}</h1>
              </div>
              <div className="biz-header-right column-1-2">
                <button>Write a Review</button>
              </div>
            </div>
            <div className="biz-info-media h-box">
              <div className="biz-info v-box col-1-3">
                <div className="biz-map-cropped">
                  <h1>Map</h1>
                </div>
                <div className="biz-full-address">
                  <p>
                    {business.address}<br/>
                    {business.city}, {business.state} {business.zipcode}
                  </p>
                </div>
                <div className="biz-edit-link">
                  <Link to={`/businesses/${business.id}/edit`}>Edit</Link>
                </div>
              </div>
              <div className="biz-album h-box col-2-3">
                <div>
                  <h1>IMG1</h1>
                </div>
                <div>
                  <h1>IMG2</h1>
                </div>
                <div>
                  <h1>IMG3</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}
