import React from 'react';
import Map from '../map/map';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import {addInputCallBack} from '../../util/general_util';
import {getGeoFromAddress} from '../../util/map_api_util';

const stateList = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Viriginia", "Wisconsin", "Wyoming"
];

export default class BusinessForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: {
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
      },
      place: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    if (this.props.formType !== 'new' && !this.props.business) {
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
    addInputCallBack(document.getElementById('biz-address'),
                     this.updateState,
                     1000);
    addInputCallBack(document.getElementById('biz-city'),
                     this.updateState,
                     1000);
    addInputCallBack(document.getElementById('biz-zip'),
                     this.updateState,
                     1000);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.businessId !== this.props.match.params.businessId &&
        newProps.match.url !== '/businesses/new') {
      this.props.fetchBusiness(newProps.match.params.businessId)
                .then((newBiz) => {
                  this.setState(newBiz.business);
                });
    } else if (!newProps.errors.length > 0) {
      this.resetState();
    }
  }

  resetState() {
    this.setState({
      business: {
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
      },
      place: {}
    });
  }

  updateState() {
    getGeoFromAddress(this.state.business)
      .then((data) => {
        if (data.status === "OK") {
          const place = data.results[0];
          const {lat, lng} = data.results[0].geometry.location;
          this.setState(merge(this.state, {business: {lat, lng}, place}));
        }
      });
  }

  update(field) {
    return (e) => {
      this.setState(merge(this.state, {business: {[field]: e.target.value}}));
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = Object.assign({}, this.state.business);
    this.props.processForm(business, this.props.formType)
              .then((newBiz) => {
                debugger;
                const props = this.props;
                props.history.push(`/businesses/${newBiz.business.id}`);
              });
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

  renderOptions() {
    return stateList.map(state => {
      return <option key={state} value={state}>{state}</option>;
    });
  }

  render() {
    console.log(this.state);
    let button;
    let header;
    if (this.props.formType === 'new') {
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
              <input onChange={this.update("name")} id="biz-name" placeholder="Welp's Diner" type="text" value={this.state.business.name}></input>
              <label htmlFor="biz-address">Address</label>
              <input onChange={this.update("address")} id="biz-address" placeholder="123 Welp Street" type="text" value={this.state.business.address}></input>
              <label htmlFor="biz-city">City</label>
              <input onChange={this.update("city")} id="biz-city" placeholder="San Francisco" type="text" value={this.state.business.city}></input>
              <label htmlFor="biz-state">State</label>
              <select onChange={this.update("state")} id="biz-state" value={this.state.business.value}>
                <option value="">Please Select</option>
                {this.renderOptions()}
              </select>
              <label htmlFor="biz-zip">ZIP</label>
              <input onChange={this.update("zipcode")} id="biz-zip" placeholder="94109" type="number" min="1" max="99999" pattern="[0-9]{5}" value={this.state.business.zipcode}></input>
              <label htmlFor="biz-phone">Phone</label>
              <input onChange={this.update("phone")} id="biz-phone" placeholder="(123) 456-7890" type="text" value={this.state.business.phone || ""}></input>
              <label htmlFor="biz-url">Web Address</label>
              <input onChange={this.update("url")} id="biz-url" placeholder="www.welp.com" type="text" value={this.state.business.url || ""}></input>
              <label htmlFor="biz-price">Price</label>
              <input onChange={this.update("price")} id="biz-price" placeholder="$" type="text" value={this.state.business.price || ""}></input>
              <button className="btn-primary biz-btn" onClick={this.handleSubmit}>{button}</button>
            </div>
            <div className="biz-update-map">
              <Map place={this.state.place} type="form"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
