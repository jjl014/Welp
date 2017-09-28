import {postImage, getImagesByBizId} from '../util/images_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";


export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const saveImage = (imgUrl, businessId) => dispatch => {
  debugger;
  return postImage(imgUrl, businessId)
    .then((image) => dispatch(receiveImage(image)));
};


export const getImages = businessId => dispatch => (
  getImagesByBizId(businessId)
    .then((images) => dispatch(receiveImages(images)))
);
