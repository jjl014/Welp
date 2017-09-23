import React from 'react';
import Map from '../map/map';
import merge from 'lodash/merge';
import {Link} from 'react-router-dom';

export default class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone: "",
      url: "",
      lat: "",
      lng: "",
      price: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.formType != 'new' && !this.props.business) {
      this.props.fetchBusiness(this.props.match.params.businessId)
                .then(() => this.setState(this.props.business));
    }
    this.props.clearBusinessErrors();
  }

  componentDidMount() {
    if (this.props.business) {
      this.setState(this.props.business);
    }
    document
      .querySelector('input#biz-zip')
      .addEventListener("mousewheel", function(event){ this.blur(); });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.businessId !== this.props.match.params.businessId) {
      this.props.fetchBusiness(newProps.match.params.businessId)
                .then(() => this.setState(newProps.business));
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = Object.assign({}, this.state);
    this.props.processForm(business, this.props.formType);
    this.props.history.push('/businesses');
  }

  handleCloseErrors() {
    return (e) => {
      e.preventDefault();
      this.props.clearBusinessErrors();
    };
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors">
          <ul className="errors-ul">
            {
              this.props.errors.map((error, idx) => {
                return <li key={`error-${idx}`}>{error}</li>;
              })
            }
          </ul>
          <div className="close-btn-wrapper">
            <div onClick={this.handleCloseErrors()} className="close-btn">
              &times;
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    let button;
    let header;
    if (this.formType === 'new') {
      button = "Create Business";
      header = "Register Your Business";
    } else {
      button = "Submit Changes";
      header = "Upate Business Detail";
    }
    return (
      <div className="biz-search-wrap">
        <div className="biz-rows-container">
          {this.renderErrors()}
          <div className="header-description">
            <h2>{header}</h2>
          </div>
          <div className="biz-form-container">
            <div className="biz-form">
              <label htmlFor="biz-name">Business Name</label>
              <input onChange={this.update("name")} id="biz-name" placeholder="Welp's Diner" type="text" value={this.state.name}></input>
              <label htmlFor="biz-address">Address</label>
              <input onChange={this.update("address")} id="biz-address" placeholder="123 Welp Street" type="text" value={this.state.address}></input>
              <label htmlFor="biz-city">City</label>
              <input onChange={this.update("city")} id="biz-city" placeholder="San Francisco" type="text" value={this.state.city}></input>
              <label htmlFor="biz-state">State</label>
              <input onChange={this.update("state")} id="biz-state" placeholder="California" type="text" value={this.state.state}></input>
              <label htmlFor="biz-zip">ZIP</label>
              <input onChange={this.update("zipcode")} id="biz-zip" placeholder="94109" type="number" min="1" value={this.state.zipcode}></input>
              <label htmlFor="biz-phone">Phone</label>
              <input onChange={this.update("phone")} id="biz-phone" placeholder="(123) 456-7890" type="text" value={this.state.phone || ""}></input>
              <label htmlFor="biz-url">Web Address</label>
              <input onChange={this.update("url")} id="biz-url" placeholder="www.welp.com" type="text" value={this.state.url || ""}></input>
              <label htmlFor="biz-price">Price</label>
              <input onChange={this.update("price")} id="biz-price" placeholder="$" type="text" value={this.state.price || ""}></input>
              <button className="btn-primary biz-btn" onClick={this.handleSubmit}>{button}</button>
            </div>
            <div className="biz-update-map">
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
