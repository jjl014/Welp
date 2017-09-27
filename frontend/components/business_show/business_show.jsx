import React from 'react';
import {Link} from 'react-router-dom';
import UploadButton from './upload_button';
import BusinessAlbumContainer from './business_album_container';
import ReviewIndexContainer from '../review/review_index_container';

export default class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {}
    };
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

  updateLatLng() {
    const {business} = this.props;
    if (!business.lat || !business.lng) {

    }
  }

  renderPhoneDetail() {
    const phone = this.props.business.phone;
    if (phone) {
      return (
        <div className="biz-phone h-box">
          <div className="biz-icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
          {phone}
        </div>
      );
    } else {
      return null;
    }
  }

  renderUrlDetail() {
    const url = this.props.business.url;
    if (url) {
      return (
        <div className="biz-url h-box">
          <div className="biz-icon">
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          <a href={`http://${url}`}>{url}</a>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const business = this.props.business;
    if (business) {
      return (
        <div className="biz-show-container max-w-1020 center">
          <div className="top-shelf"></div>
          <div className="biz-page-main">
            <div className="biz-page-header">
              <div className="biz-header-left column-1-2">
                <div className="biz-header-name"><h1>{business.name}</h1></div>
                <div className="biz-header-rating">
                  <img src="https://res.cloudinary.com/jun/image/upload/v1506362363/five_stars_wbd6ym.png"/>
                </div>
                <div className="biz-header-price-category"><h3>{business.price}</h3></div>
              </div>
              <div className="biz-header-right column-1-2">
                <div className="btn-container h-box">
                  <Link to={`/businesses/${business.id}/reviews/new`}>
                    <button className="btn-primary btn-review"><i className="fa fa-lg fa-star" aria-hidden="true"></i>&nbsp;&nbsp;Write a Review&nbsp;</button>
                  </Link>
                  <UploadButton business={business}/>
                </div>
              </div>
            </div>
            <div className="biz-info-media h-box">
              <div className="biz-info v-box">
                <div className="biz-map-cropped">
                  <img src={`https://maps.googleapis.com/maps/api/staticmap?scale=2&center=${business.lat},${business.lng}&zoom=15&size=286x135&markers=color:red%7C%7C${business.lat},${business.lng}&key=AIzaSyATPzJ4_cbdsC14c4fJM1-Hwf5Fgta5L_A`}/>
                </div>
                <div className="biz-full-info">
                  <div className="biz-full-address h-box">
                    <div className="icon-18 biz-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    {business.address}<br/>
                    {business.city},&nbsp;{business.state}&nbsp;{business.zipcode}<br/>
                  </div>
                  { this.renderPhoneDetail() }
                  { this.renderUrlDetail() }
                  <div className="biz-edit-link h-box">
                    <div className="biz-icon-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <Link to={`/businesses/${business.id}/edit`}>Edit</Link>
                  </div>
                </div>
              </div>
              <BusinessAlbumContainer images={this.state.images}/>
            </div>
          </div>
          <div className="biz-page-review-info h-box">
            <ReviewIndexContainer className="column-alpha" business={business}/>
            <div className="biz-more-info column-1-3">
              <h1>BUSINESS HOURS</h1>
              <h3>AND OTHER INFO</h3>
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
