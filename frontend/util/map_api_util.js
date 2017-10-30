export const getGeoFromAddress = ({address, city, state, zipcode}) => {
  const query = [address, city, state, zipcode].join("+");
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${window.google_apis.google_geocode_api_key}`
  });
};

export const getBusinessInfo = (name) => {
  const params= {};
  params['term'] = name;
  return $.ajax({
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    params
  });
};
