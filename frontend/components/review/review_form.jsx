import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexContainer from './review_index_container';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: 5
    };
  }

  componentWillMount() {
    if(!this.props.business) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
    if (this.props.formType !== 'edit' && !this.props.review) {
      this.props.fetchReview(this.props.match.params.reviewId)
                .then((review) => {
                  this.setState(review);
                });

    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.review) {
      const review = newProps.review;
      this.setState({body: review.body, rating: review.rating});
    }
  }

  componentDidUpdate() {
    const placeholder = "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    this.refs.reviewTextarea.setAttribute("placeholder", placeholder);

    // textarea autoresize by Maximilian Hoffman
    document.querySelector(".review-textarea").addEventListener('input', autoresize, false);
    function autoresize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight+'px';
      this.scrollTop = this.scrollHeight;
      window.scrollTo(window.scrollLeft,(this.scrollTop + this.scrollHeight));
    }
  }


  updateBody() {
    return (e) => {
      this.setState({body: e.currentTarget.value});
    };
  }

  handleSubmit() {
    return(e) => {
      e.preventDefault();
      const business = this.props.business;
      const oldReview = this.props.review;
      let review = this.state;
      if (this.props.formType === 'edit') {
        review = Object.assign({}, oldReview, {body: this.state.body, rating: this.state.rating});
      }
      this.props.processForm(this.props.formType, review, this.props.business.id)
                .then(() => {
                  this.props.history.push(`/businesses/${this.props.business.id}`);
                });
    };
  }

  updateRating(val) {
    return(e) => {
      this.setState({rating: val});
    };
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
      let businessPrice;
      let price = business.price;
      if (price === 4) {
        businessPrice = "$$$$";
      } else if (price === 3) {
        businessPrice = "$$$";
      } else if (price === 2) {
        businessPrice = "$$";
      } else {
        businessPrice = "$";
      }
      return (
        <div className="review-form-container h-box">
          <div className="review-form-wrapper v-box column-alpha border-layout-right">
            <div className="section-header">
              <h3 className="border-layout-bottom">{header}</h3>
            </div>
            <div className="review-biz-info h-box">
              <div className="biz-img">
                <img src={`${business.img_preview}`}/>
              </div>
              <div className="review-biz-details v-box">
                <div className="review-biz-name">
                  <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                </div>
                <div className="price-category">
                  {businessPrice}
                </div>
                <div>
                  {business.address}
                </div>
                <div>
                  {business.city}, {business.state} {business.zipcode}
                </div>
              </div>
            </div>
            <div>
              <label>Your Review</label>
            </div>
            <div className="review-form">
              <div className="review-form-input">
                <div className="rating-input-wrapper border-layout-bottom">
                  <span className="rating">
                    <input onClick={this.updateRating(5)} type="radio" className="rating-input"
                           id="rating-input-1-5" name="rating-input-1"/>
                    <label htmlFor="rating-input-1-5" className="stars-large"></label>
                    <input onClick={this.updateRating(4)} type="radio" className="rating-input"
                           id="rating-input-1-4" name="rating-input-1"/>
                    <label htmlFor="rating-input-1-4" className="stars-large"></label>
                    <input onClick={this.updateRating(3)} type="radio" className="rating-input"
                           id="rating-input-1-3" name="rating-input-1"/>
                    <label htmlFor="rating-input-1-3" className="stars-large"></label>
                    <input onClick={this.updateRating(2)} type="radio" className="rating-input"
                           id="rating-input-1-2" name="rating-input-1"/>
                    <label htmlFor="rating-input-1-2" className="stars-large"></label>
                    <input onClick={this.updateRating(1)} type="radio" className="rating-input"
                           id="rating-input-1-1" name="rating-input-1"/>
                    <label htmlFor="rating-input-1-1" className="stars-large"></label>
                  </span>
                </div>
                <div className="review-textarea-wrapper">
                  <textarea ref="reviewTextarea" className="review-textarea"
                    onChange={this.updateBody()}
                    value={this.state.body}
                    placeholder = "Your review helps others learn about great local businesses.
                                  Please don't review this business if you received a freebie
                                  for writing this review, or if you're connected in any way
                                  to the owner or employees.">
                  </textarea>
                </div>
              </div>
              <div className="review-button-container h-box">
                <button onClick={this.handleSubmit()} className="btn-primary-small">Post Review</button>
                <Link to={`/businesses/${business.id}`}>Cancel</Link>
              </div>

            </div>
          </div>
          <div className="review-sample-wrapper v-box column-beta">
            <div className="section-header">
              <h3 className="border-layout-bottom ">Reviews for {business.name}</h3>
            </div>
            <div className="review-samples">
              <ReviewIndexContainer business={business}/>
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
