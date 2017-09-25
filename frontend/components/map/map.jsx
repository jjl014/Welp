/* global google:false */
import React from 'react';
import isEmpty from 'lodash/isEmpty';

const mapOptions = {
  // San Francisco
  center: {lat: 37.7758, lng: -122.435 },
  zoom: 13
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }
  //
  // componentWillReceiveProps(newProps) {
  //   if (newProps.place && (Object.keys(newProps.place).length !== 0)) {
  //     const lat = newProps.place.geometry.location.lat;
  //     const lng = newProps.place.geometry.location.lng;
  //     const position = new google.maps.LatLng(lat, lng);
  //     const marker = new google.maps.Marker({
  //       position,
  //       map: this.map,
  //     });
  //     this.map.setCenter(position);
  //   }
  // }

  componentDidUpdate() {
    if (this.props.type === "form" && this.props.place && (Object.keys(this.props.place).length !== 0)) {
      const lat = this.props.place.geometry.location.lat;
      const lng = this.props.place.geometry.location.lng;
      const position = new google.maps.LatLng(lat, lng);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
      });
      this.map.setCenter(position);
    }
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map
      </div>
    );
  }
}
