import React from 'react';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }

  componentWillMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.business;
    let header;
    if (this.props.formType === "edit") {
      header = "Update Your Review";
    } else {
      header = "Write a Review";
    }
    if (business) {
      return(
        <div className="review-form-container h-box">
          <div className="review-form-wrapper v-box column-alpha border-layout-right">
            <div className="section-header">
              <h3 className="border-layout-bottom">{header}</h3>
            </div>
            <div className="review-form">
              <button className="btn-primary-small">Post Review</button>
            </div>
          </div>
          <div className="review-sample-wrapper v-box column-beta">
            <div className="section-header">
              <h3 className="border-layout-bottom ">Reviews for {business.name}</h3>
            </div>
            <div className="review-samples">
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
