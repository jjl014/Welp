export const postImage = (url) => {
  const image = {img_url : url};
  return $.ajax({
    method: 'POST',
    url: 'api/images',
    data: {image}
  });
};
