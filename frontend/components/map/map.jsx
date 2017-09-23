import React from 'react';

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

  render() {
    return (
      <div className="map-wrapper">
        <div id='map-container' ref='map'>
          Map
        </div>
      </div>
    );
  }
}
