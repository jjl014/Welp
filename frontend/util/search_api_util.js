export const filterBusinesses = (searchKeyword) => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data: {searchKeyword}
  })
);
