export const getGeoFromAddress = ({address, city, state, zipcode}) => {
  const query = [address, city, state, zipcode].join("+");
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyCSX3XPr-HFJG-dNlag9UKwvw2OCzbGz1s`
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
