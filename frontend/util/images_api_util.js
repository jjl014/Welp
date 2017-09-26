export const postImage = (url) => {
  const image = {img_url : url};
  return $.ajax({
    method: 'POST',
    url: 'api/images',
    data: {image}
  });
};

export const getImagesByBizId = (businessId) => (
  $.ajax({
    method: 'GET',
    url: 'api/images',
    data: {business_id: businessId}
  })
);
