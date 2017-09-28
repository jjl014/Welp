/* global google:false */
import React from 'react';
import MarkerManager from '../../util/marker_manager';

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
    const mapOptions = {
      // San Francisco
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 14
    };
    if (this.props.type === 'search') {
      mapOptions.zoom = 12;
    }

    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.businesses && Object.keys(this.props.businesses).length > 0 ) {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.type === 'search' && newProps.businesses) {
      this.MarkerManager.updateMarkers(newProps.businesses);
    }
  }

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
