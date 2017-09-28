export const postImage = (url, businessId) => {
  debugger;
  const image = {img_url : url};
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/images`,
    data: {image, businessId}
  });
};

export const getImagesByBizId = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/images`,
    data: {business_id: businessId}
  })
);
