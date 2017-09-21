export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";

import {
  getAllBusinesses,
  getBusiness,
  postBusiness,
  patchBusiness,
  destroyBusiness } from '../util/business_api_util';

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const removeBusiness = (businessId) => ({
  type: REMOVE_BUSINESS,
  businessId
});

export const editBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const fetchBusinesses = () => dispatch => (
  getAllBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
);

export const createBusiness = (business) => dispatch => (
  postBusiness(business)
    .then((newBusiness) => dispatch(receiveBusiness(newBusiness)))
);

export const updateBusiness = (business) => dispatch => (
  patchBusiness(business)
    .then((updatedBusiness) => dispatch(receiveBusiness(updatedBusiness)))
);

export const deleteBusiness = (businessId) => dispatch => (
  destroyBusiness(businessId).
    then(() => dispatch(removeBusiness(businessId)))
);
