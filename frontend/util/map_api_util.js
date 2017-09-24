export const getGeoFromAddress = ({address, city, state, zipcode}) => {
  debugger;
  const query = [address, city, state, zipcode].join("+");
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyCSX3XPr-HFJG-dNlag9UKwvw2OCzbGz1s`
  });
};
