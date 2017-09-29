# Welp

[Welp live][heroku]

Welp is a Yelp inspired clone where users are able to signup and login to create businesses as well as leave reviews on existing ones. Welp is a single page application that utilizes React/Redux for the front end and Rails/Postgresql for the back end. Google Maps API and Google Static Maps API were used to get latitude and longitude information as well as address components based on user input. React-Slick was used to display the image album for the business show pages. 

## Features

### Home

![Home Page][home]

The home page features a search bar that allows users to search by business name. It also has featured businesses that changes everytime you visit the home page.

### Business Search

![Business Search][search]

Searching for a business returns results based on the business name. The map markers are also updated to reflect the current businesses in the index.

### Creating a Business

![Business Create][business-create]

When creating a business, the map will update and show a marker at the specified address location based on the user's input. Working with Google Places API came with some difficulties since the business creation form used the same map component as the business index. Adding a type property made the distinction between the two manageable and allowed for code reuse.

```javascript
// map.jsx

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

```

### Editing a Business

![Business Edit][business-edit]

Users are allowed to edit the business information, but only the owners of a business are allowed to delete a business.

### Business Index

![Business Index][business-index]

The business index shows a list of all the restuarants along with their map markers on the google maps. 

### Business Page

![Business Show Page][business-show]

On the business page, users can see all the information about the business. Users can read the various reviews made by others and write their own. If they have a photo they want to add to the business image album, they can simply click on "Add Photo" button and upload their photo.

### Review Form

![Review Form][review-form]

On the review form, users can write their own unique review. Users can also see the many other reviews made by others along the right side of the page.

## Future Directions

* Search by food and location
* Update business index when the map is moved
* Allow users to bookmark restuarants
* User profile page where users can view/edit their reviews

[heroku]: https://welp-i-guess.herokuapp.com/
[home]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_home.png
[business-create]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_business_create.png
[business-edit]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_business_edit.png
[business-index]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_business_index.png
[business-show]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_business_show.png
[review-form]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_review_form.png
[search]: https://github.com/jjl014/Welp/blob/master/app/assets/images/welp_search.png
