/* global google:false */

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {

  }

  createmakerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
    });

    this.markers[marker.businessId] = marker;
  }

  remove(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;
